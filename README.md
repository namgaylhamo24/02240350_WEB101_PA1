# Tellonym Profile Page Recreation

A comprehensive React-based recreation of a Tellonym profile page built with Next.js, Tailwind CSS, and modern React practices.

![Tellonym Profile Page Preview](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tellonym.jpg-UwTjCkKcYCYgxMJijxCxYAK2RlbGeZ.jpeg)

## Project Overview

This project is a faithful recreation of a Tellonym profile page, focusing on:

- Breaking down the UI into logical, reusable React components
- Implementing a responsive design that works across all device sizes
- Following React best practices and the single responsibility principle
- Creating a maintainable, scalable component architecture
- Accurately matching the visual design and interactions of the original interface

The recreation includes all key elements of the Tellonym profile page:
- Navigation bar with logo and action icons
- Profile information section (avatar, username, stats)
- Anonymous messaging functionality
- Empty state for unanswered tells
- Footer with links and app download options

## Component Architecture

The application is structured with a clear component hierarchy designed for reusability and maintainability.


### 1. Component Granularity

Components are broken down to an appropriate level of granularity:

- Not too large: Easier to understand, test, and maintain
- Not too small: Avoids unnecessary complexity and prop drilling


For example, `ProfileHeader`, `ProfileStats`, and `ProfileActions` are separated into discrete components, but i avoided creating a separate component for each stat item (e.g., `Followers Count`, `Tells Count`, `Followings Count`) as that would introduce unnecessary complexity. Instead, these items are managed within the `ProfileStats` component, ensuring a balance between granularity and maintainability.

### 2. State Management

- Local component state is used for UI interactions (message input, toggle)
- React's useState hook is sufficient for this application's needs
- For a larger application, we would consider context API or a state management library


### 3. Data Flow

- Data flows down through props from parent to child components
- Events flow up through callback functions
- This one-way data flow makes the application easier to understand and debug


### 4. Styling Approach

- Tailwind CSS is used for styling benefits:

- No context switching between CSS files
- Consistent design system
- Utility-first approach speeds development
- Built-in responsive design utilities



### 5. TypeScript Integration

- TypeScript provides type safety for props and state
- Interface definitions for props ensure correct usage
- Type checking catches potential errors during development


## Responsive Design Implementation

The responsive design principles have been applied effectively throughout the project to ensure the interface adapts seamlessly to various screen sizes and devices.

### Mobile-First Approach

The project follows a mobile-first design strategy:
- Base styles are optimized for mobile screens.
- Media queries and Tailwind's responsive utilities are used to progressively enhance the layout for larger screens.

### Breakpoints

The following breakpoints were utilized to create a responsive experience:
- **Small (mobile)**: 0-640px
    - Single-column layout.
    - Optimized touch targets for better usability.
    - Condensed navigation for smaller screens.
- **Medium (tablet)**: 641px-1024px
    - Improved spacing and balanced typography.
    - Two-column layout where applicable.
- **Large (desktop)**: 1025px+
    - Full-width layout with enhanced spacing.
    - Optimized for larger screens with additional visual refinements.

### Responsive Techniques Used

Several responsive techniques were implemented:
- **Fluid Typography**: Relative units like `rem` and `em` ensure text scales appropriately.
- **Flexible Layouts**: Flexbox and CSS Grid were used to create adaptable layouts.
- **Conditional Rendering**: Certain UI elements are displayed or hidden based on screen size.
- **Touch-Friendly Elements**: Input fields and buttons are designed for touch interaction.

### Testing for Responsiveness

The design was tested across multiple devices and browsers to ensure consistent behavior:
- **Devices**: iPhone, Android phones, tablets, and desktops with varying resolutions.
- **Browsers**: Chrome, Firefox, Safari, and Edge.
- **Tools**: Browser developer tools and responsive design testing tools were used to validate the implementation.

This ensures the application delivers a seamless and user-friendly experience across all devices.


## Setup and Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- Git


### Installation Steps

1. Clone the repository

```shellscript
git clone https://github.com/namgaylhamo24/02240350_WEB101_PA1.git
cd tellonym-profile-recreation
```


2. Install dependencies

```shellscript
npm install
# or
yarn install
```


3. Run the development server

```shellscript
npm run dev
# or
yarn dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser


### Project Structure

```plaintext
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── navbar.tsx        # Navigation bar
│   ├── profile-page.tsx  # Profile container
│   ├── profile-header.tsx # User avatar and info
│   ├── profile-stats.tsx # Followers, tells stats
│   ├── profile-actions.tsx # Edit profile button
│   ├── message-input.tsx # Message input with toggle
│   ├── empty-state.tsx   # Empty state display
│   └── footer.tsx        # Page footer
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## Future Improvements

Going ahead, the project can be enhanced in various ways.

### Functional Enhancements

1. **API Integration**

1. Connect to a real backend for dynamic data
2. Implement authentication flow
3. Add real message sending functionality

2. **State Management**

1. For larger applications, implementing global state with Context API or Redux.
2. Add persistence with local storage.

3. **Extra Features**

1. Implement a notification system
2. Implement user search
3. Show the message history view


### Technical Enhancements
1. **Performance**

1. Implement code splitting.
2. Optimize images.
3. Improve loading states.

2. **Accessibility**

1. Full WCAG compliance audit should be done.
2. Improve keyboard navigation.
3. Improve compatibility with screen readers.

## Technologies Used

### Core Technologies

- **Next.js**: React framework with file-based routing and server components
- **React**: UI library for building component-based interfaces
- **TypeScript**: Static type checking for JavaScript
- **Tailwind CSS**: Utility-first CSS framework


### UI Components and Libraries

- **shadcn/ui**: Reusable, accessible UI component
- **Lucide React**: Modern icon library


### Development Tools

- **ESLint**: JavaScript linting
- **Prettier**: Code formatting
- **next-themes** (optional): Dark mode support


### Challenges Faced:  

- Selecting React or Next.js.  
- Once I added all the required code, getting the precise page I wanted to develop was a battle.  
- The icons, padding, and general design of the page did not match the application I was trying to copy.  
- Perhaps, the hardest thing was installation and working with Tailwind CSS.

---

This project shows knowledge of modern React development practices, component architecture, and responsive design principles, while effectively recreating the Tellonym profile interface.

