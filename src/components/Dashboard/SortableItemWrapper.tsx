// src/components/SortableItemWrapper.tsx
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { dragHandle } from "../../styles/dashboard.styles";

type Props = {
  id: string;
  children: React.ReactNode;
};

export default function SortableItemWrapper({ id, children }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <div {...attributes} {...listeners} className={dragHandle}>
        ⠿
      </div>
      {children}
    </div>
  );
}
