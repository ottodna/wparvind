# wparvind.com – Theme Design Specification

## 🎨 Color Palette

### Light Mode

- **Primary**: `#1A5CFF`
- **Accent**: `#FFD54F`
- **Background**: `#F9FAFB`
- **Text (Primary)**: `#1F2937`
- **Text (Secondary)**: `#6B7280`
- **Border**: `#E5E7EB`

### Dark Mode

- **Background**: `#0F172A`
- **Header/Footer**: `#1E293B`
- **Text (Primary)**: `#F3F4F6`
- **Text (Secondary)**: `#94A3B8`
- **Border**: `#334155`
- **CTA Button**: `#3B82F6`
- **CTA Hover**: `#FACC15`

## 🔤 Typography

- **Headings**: `DM Serif Display`
- **Body/UI**: `Lato`
- **Button Labels**: Lato SemiBold

### Font Import

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Lato:wght@400;600;700&display=swap');
```

### Tailwind Config

```js
fontFamily: {
  sans: ['Lato', 'sans-serif'],
  display: ['DM Serif Display', 'serif'],
}
```

## 🔘 Button System

| Type       | Background   | Text      | Border     | Hover Effect         |
|------------|--------------|-----------|------------|----------------------|
| Primary    | `#1A5CFF`    | `#FFFFFF` | None       | `bg-blue-700`        |
| Secondary  | Transparent  | `#1A5CFF` | `#1A5CFF`  | `bg-blue-50`         |
| Ghost      | Transparent  | `#1F2937` | None       | `bg-gray-100`        |

- **Radius**: `rounded-md`
- **Focus**: `ring-2 ring-offset-2 ring-primary`

## 🧾 Form Elements

- **Input/Textarea BG**: `#FFFFFF` (light) / `#1E293B` (dark)
- **Border**: `#E5E7EB` (light) / `#334155` (dark)
- **Placeholder Text**: `text-muted`
- **Radius**: `rounded-md`
- **Error State**: `text-red-600`, `border-red-500`

## 📦 Card Design (Services, Testimonials, Projects)

- **Background**: `#FFFFFF` / `#1E293B`
- **Padding**: `p-6`
- **Border**: `border-gray-200` / `border-gray-700`
- **Shadow**: `shadow-md`, hover: `hover:shadow-lg`
- **Radius**: `rounded-xl`

## 🟦 Corner Radius (Global)

- **Buttons**: `rounded-md`
- **Inputs**: `rounded-md`
- **Cards**: `rounded-xl`
- **Avatars/Images**: `rounded-lg`

## 🎞️ Animations & Transitions

- **Default**: `transition-all duration-200 ease-in-out`
- **Buttons/Cards Hover**: `scale-105`, `shadow-lg`
- **Links**: `hover:text-primary`, optional `underline`
- **Page Load**: `fade-in` or `slide-up` (AOS)

## 📏 Spacing & Layout Rhythm

| Element       | Tailwind Class | Purpose                  |
|---------------|----------------|--------------------------|
| Button Padding| `p-2`          | Compact click area       |
| Card Padding  | `p-4`–`p-6`    | Consistent UI spacing    |
| Section Gap   | `py-12`        | Standard section spacing |
| Hero/CTA Gap  | `py-20`        | More dramatic emphasis   |

This theme guide governs all visual identity rules for the `wparvind.com` site and is locked for production. Any future changes must preserve consistency across dark/light modes, responsiveness, and brand tone.
