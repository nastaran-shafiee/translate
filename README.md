# Word Translation Dashboard

A modern web application for managing and viewing translations with a beautiful dark theme interface.

## Features

- **Management Dashboard**
  - View and edit translations for multiple languages
  - Add new keywords with translations
  - Drag and drop to reorder keywords
  - Delete keywords
  - Real-time updates

- **Public View**
  - Clean and user-friendly interface
  - Language switching
  - Search functionality
  - Responsive design

## Technical Stack

- React 18 with TypeScript
- React Router for navigation
- React Beautiful DnD for drag and drop
- TailwindCSS for styling
- LocalStorage for data persistence

## Data Structure

The application uses a simple but effective data structure:

```typescript
interface Keyword {
  id: string;
  order: number;
  translations: {
    [key in Language]: string;
  };
}
```

This structure was chosen because:
1. It maintains a clear separation between keywords and their translations
2. The `order` field allows for persistent sorting
3. The `id` field ensures unique identification for each keyword
4. The translations object makes it easy to add new languages without changing the structure

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── context/       # React Context for state management
  ├── pages/         # Page components
  ├── types/         # TypeScript type definitions
  └── App.tsx        # Main application component
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
