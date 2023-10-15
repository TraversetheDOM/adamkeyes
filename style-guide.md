# Adam Keyes style-guide

The portfolio will be built to be responsive across three devices:

- Mobile Devices - 375px
- Tablet Devices - 768px
- Desktop Devices - 1440px

## Color

```css
--red: hsl(7, 100%, 68%);
--white: hsl(0, 0%, 100%);
--gray: hsl(0, 0%, 85%);
--dark-grey: hsl(0, 0%, 14%);
--green: hsl(153, 71%, 59%);
--black: hsl(0, 0%, 8%);
```

## Gap

```css
--gap-0: 0px;
--gap-1: 1px;
--gap-1_25: 0.125rem;
--gap-2_5: 0.25rem;
--gap-3_75: 0.375rem;
--gap-5: 0.5rem;
--gap-6_25: 0.625rem;
--gap-7_5: 0.75rem;
--gap-8_75: 0.875rem;
--gap-10: 1rem;
--gap-12_5: 1.25rem;
--gap-15: 1.5rem;
--gap-17_5: 1.75rem;
--gap-20: 2rem;
--gap-22_5: 2.25rem;
--gap-27_5: 2.75rem;
--gap-30: 3rem;
--gap-35: 3.5rem;
--gap-40: 4rem;
--gap-50: 5rem;
--gap-60: 6rem;
--gap-70: 7rem;
--gap-80: 8rem;
--gap-90: 9rem;
--gap-100: 10rem;
--gap-110: 11rem;
--gap-120: 12rem;
--gap-130: 13rem;
--gap-140: 14rem;
--gap-150: 15rem;
--gap-160: 16rem;
--gap-180: 18rem;
--gap-200: 20rem;
--gap-240: 24rem;
```

## Display

```css
--hidden: none;
--block: block;
--inline: inline;
--inline-block: inline-block;
--flex: flex;
--inline-flex: inline-flex;
--grid: grid;
--inline-grid: inline-grid;
```

## Radius

```css
--radius-1: 2px;
--radius-2: 4px;
--radius-3: 6px;
--radius-4: 8px;
--radius-5: 12px;
--radius-6: 16px;
--radius-7: 20px;
--radius-8: 24px;
--radius-9: 26px;
--radius-10: 28px;
--radius-11: 30px;
--radius-12: 32px;
--radius-13: 34px;
--radius-14: 36px;
--radius-15: 38px;
--radius-16: 40px;
```

## Typography

```css
--ff-Space-Grotesk-sans-serif: var(--ff-space-grotesk), sans-serif;
--ff-space-grotesk: 'Space Grotesk';
--font-feature-settings: 'clig' off, 'liga' off;
--fw-100: 100;
--fw-200: 200;
--fw-300: 300;
--fw-400: 400;
--fw-500: 500;
--fw-600: 600;
--fw-700: 700;
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0em;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;

/* Font Sizes */
--fs-1: clamp(1rem, calc(0.96rem + 0.19vw), 1.13rem);
--fs-2: clamp(1.33rem, calc(1.16rem + 0.73vw), 1.82rem);
--fs-3: clamp(1.78rem, calc(1.37rem + 1.75vw), 2.95rem);
--fs-4: clamp(2.37rem, calc(1.53rem + 3.6vw), 4.76rem);
```

## Spacing

```css
--space-1: clamp(0.25rem, calc(0.23rem + 0.09vw), 0.31rem);
--space-2: clamp(0.5rem, calc(0.48rem + 0.09vw), 0.56rem);
--space-3: clamp(0.75rem, calc(0.71rem + 0.19vw), 0.88rem);
--space-4: clamp(1rem, calc(0.96rem + 0.19vw), 1.13rem);
--space-5: clamp(1.5rem, calc(1.43rem + 0.28vw), 1.69rem);
--space-6: clamp(2rem, calc(1.91rem + 0.38vw), 2.25rem);
--space-7: clamp(3rem, calc(2.87rem + 0.56vw), 3.38rem);
--space-8: clamp(4rem, calc(3.82rem + 0.75vw), 4.5rem);
--space-9: clamp(6rem, calc(5.74rem + 1.13vw), 6.75rem);
--space-1-2: clamp(0.25rem, calc(0.14rem + 0.47vw), 0.56rem);
--space-2-3: clamp(0.5rem, calc(0.37rem + 0.56vw), 0.88rem);
--space-3-4: clamp(0.75rem, calc(0.62rem + 0.56vw), 1.13rem);
--space-4-5: clamp(1rem, calc(0.76rem + 1.03vw), 1.69rem);
--space-5-6: clamp(1.5rem, calc(1.24rem + 1.13vw), 2.25rem);
--space-6-7: clamp(2rem, calc(1.52rem + 2.07vw), 3.38rem);
--space-7-8: clamp(3rem, calc(2.47rem + 2.25vw), 4.5rem);
--space-8-9: clamp(4rem, calc(3.03rem + 4.13vw), 6.75rem);
--space-4-6: clamp(1rem, calc(0.56rem + 1.88vw), 2.25rem);
--space-7-9: clamp(3rem, calc(1.68rem + 5.63vw), 6.75rem);
```

## Screen readers

```css
/* Remove the label text from the rendered page although, it will be visible to screen readers */
.sr-only {
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  border-width: var(--sr-only-border-width);
  width: var(--sr-only-width);
  height: var(--sr-only-height);
  left: var(--sr-only-left);
  top: var(--sr-only-top);
  margin: var(--sr-only-margin);
  padding: var(--sr-only-padding);
}

--sr-only-width: 1px;
--sr-only-height: 1px;
--sr-only-padding: 0px;
--sr-only-margin: -1px;
--sr-only-border-width: 0;
--sr-only-left: -1000px;
--sr-only-top: auto;
```

## Font Face

```css
@font-face {
	font-family: "Space Grotesk"
	src: url() format("woff2") tech("variations"),
	src: url() format("woff2-variations"),
	src: url() format("ttf") tech("variations"),
	src: url() format("ttf-variations");
	font-weight: 100 700;
	font-style: normal;
}
```
