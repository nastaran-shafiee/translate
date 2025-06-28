import { useTranslation } from "../context/TranslationContext";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { container, title, listContainer } from "../styles/dashboard.styles";
import AddKeywordForm from "../components/Dashboard/AddKeyword";
import KeywordCard from "../components/Dashboard/Keyword";
import SortableItemWrapper from "../components/Dashboard/SortableItemWrapper";

export default function Dashboard() {
  const {
    keywords,
    languages,
    addKeyword,
    updateTranslation,
    reorderKeywords,
    deleteKeyword,
  } = useTranslation();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = keywords.findIndex((k) => k.id === active.id);
      const newIndex = keywords.findIndex((k) => k.id === over.id);
      reorderKeywords(arrayMove(keywords, oldIndex, newIndex));
    }
  };

  return (
    <div className={container}>
      <h2 className={title}>داشبورد مدیریت ترجمه</h2>
      <AddKeywordForm languages={languages} addKeyword={addKeyword} />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={keywords.map((k) => k.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className={listContainer}>
            {keywords.map((keyword) => (
              <SortableItemWrapper key={keyword.id} id={keyword.id}>
                <KeywordCard
                  keyword={keyword}
                  languages={languages}
                  updateTranslation={updateTranslation}
                  deleteKeyword={deleteKeyword}
                />
              </SortableItemWrapper>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
