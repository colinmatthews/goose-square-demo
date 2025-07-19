# Goose Development Guide - Square Component Library

## Project Overview
This is a React + Vite + TypeScript component library showcase application with a comprehensive UI component system. The project follows a clean architecture with centralized state management and a well-organized component structure.

## Current Architecture

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Utilities**: clsx, tailwind-merge

### File Structure Analysis
```
src/
├── components/
│   ├── ui/              # 20+ reusable UI components (Button, Card, Table, etc.)
│   ├── layout/          # Layout components (Header, LeftNav, CategoryFilter)
│   ├── library/         # Library-specific components (ComponentList, ComponentCard)
│   └── demos/           # Demo components showing UI components in action
├── context/             # State management contexts
│   ├── LibraryContext.tsx    # Main library state
│   └── DashboardContext.tsx  # Dashboard-specific state
├── data/               # Mock data sources
│   ├── mockData.ts         # Component library data
│   └── mockDashboardData.ts # Dashboard mock data
├── pages/              # Page-level components
│   ├── MainPage.tsx        # Component library main page
│   └── DashboardPage.tsx   # Dashboard page
├── types/              # TypeScript definitions
│   ├── component.ts        # Component library types
│   └── dashboard.ts        # Dashboard types
└── utils/              # Utility functions
```

## Current State Analysis

### What's Working
1. ✅ **Data Model Defined**: Complete TypeScript interfaces in `types/component.ts`
2. ✅ **Mock Data**: Comprehensive mock data in `data/mockData.ts`
3. ✅ **Component Library**: 20+ UI components in `components/ui/`
4. ✅ **Centralized State**: React Context for state management
5. ✅ **Demo Components**: Working demos for major components
6. ✅ **Category System**: Organized components by categories

### Current Issues Identified
1. ⚠️ **Conflicting App Structure**: App.tsx loads DashboardPage but MainPage contains the component library
2. ⚠️ **Routing Missing**: No React Router setup despite being mentioned in PRD
3. ⚠️ **Incomplete Navigation**: Components exist but navigation between them unclear
4. ⚠️ **Search Not Implemented**: SearchTerm state exists but no search UI
5. ⚠️ **Code Examples Missing**: Component interface includes codeExample but not implemented

### Component Library Status
- **UI Components**: 20+ components (Alert, Button, Card, Table, Form components, etc.)
- **Demo Components**: 8+ working demo components
- **Categories**: 6 categories (Dashboard, Tables, Feedback, Forms, Navigation, All)
- **State Management**: Fully functional with filtering and search capabilities

## Development Guidelines Compliance

### ✅ Following Guidelines
- **Data Model**: Well-defined TypeScript interfaces
- **Mock Data**: Using mock data instead of database
- **Component Library**: Comprehensive reusable components
- **Centralized State**: React Context for global state
- **React + Vite**: Correct tech stack choice

### ❌ Areas to Address
- **Routing**: Need to implement React Router
- **Code Examples**: Need to add code snippet display
- **Search UI**: Need to implement search interface
- **Navigation Flow**: Need to clarify app navigation structure

## Recommended Next Steps

### Phase 1: Fix Architecture Issues (HIGH PRIORITY)
1. **Resolve App Structure Conflict**
   - Decide if main app should show component library or dashboard
   - Implement proper routing between pages
   
2. **Add React Router**
   - Install react-router-dom
   - Set up routing structure
   - Create navigation between MainPage and DashboardPage

### Phase 2: Complete Core Features
1. **Implement Search UI**
   - Add search input to Header component
   - Connect to existing search state

2. **Add Code Examples**
   - Create code snippet display component
   - Add syntax highlighting
   - Populate codeExample fields in mock data

### Phase 3: Enhanced Features
1. **Component Detail Pages**
   - Individual component showcase pages
   - Props documentation
   - Multiple variants display

## Key Components Overview

### Core UI Components (20+)
- **Form**: Button, Input, Select, TextArea, Checkbox, Label
- **Display**: Card, Badge, Alert, Table, EmptyState
- **Navigation**: (LeftNav implemented)
- **Interactive**: Toggle, SearchInput, ColorSwatch
- **Complex**: PerformanceDashboard, ProductForm, ItemsTable

### Layout Components
- **Header**: Main navigation header
- **LeftNav**: Sidebar navigation with animations
- **CategoryFilter**: Component category filtering
- **DashboardHeader**: Dashboard-specific header

### Context Providers
- **LibraryContext**: Main component library state management
- **DashboardContext**: Dashboard-specific state

## Development Best Practices Applied
- TypeScript for type safety
- Tailwind CSS for consistent styling
- Component composition pattern
- Props interfaces for all components
- Centralized state management
- Mock data approach
- Clean file organization

## Potential Conflicts to Address
1. **App Entry Point**: Currently loading DashboardPage instead of MainPage
2. **Context Usage**: Two separate contexts may need coordination
3. **Component Integration**: Some components reference others that may not exist
4. **Styling Consistency**: Need to ensure consistent design system usage

## Next Development Questions to Clarify
1. Should the main landing page be the component library or dashboard?
2. Do we need routing between different views or single-page navigation?
3. Should we integrate the dashboard as a component showcase or separate feature?
4. What level of component documentation detail is needed?

This guide will be updated as development progresses and architecture decisions are made.
