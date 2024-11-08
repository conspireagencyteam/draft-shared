/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'index.html'],
  prefix: 'cadoi-',
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px',
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
        full: '9999px',
      },
      container: {
        center: true,
        padding: 'var(--cadoi-container-padding-x)',
      },
      fontSize: {
        xs: ['12px', '18px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '2xl': ['40px', '48px'],
        '3xl': ['48px', '56px'],
        '4xl': ['56px', '64px'],
        '5xl': ['64px', '72px'],
        '6xl': ['72px', '80px'],
        '7xl': ['80px', '96px'],
        '8xl': ['96px', '112px'],
        '9xl': ['112px', '128px'],
      },
      gap: {
        0: '0px',
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
      },
      spacing: {
        0: '0px',
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
      },
      colors: {
        light: {
          DEFAULT: `rgba(var(--cadoi-light-rgb), 1)`,
          90: `rgba(var(--cadoi-light-rgb), 0.9)`,
          80: `rgba(var(--cadoi-light-rgb), 0.8)`,
          70: `rgba(var(--cadoi-light-rgb), 0.7)`,
          60: `rgba(var(--cadoi-light-rgb), 0.6)`,
          50: `rgba(var(--cadoi-light-rgb), 0.5)`,
          40: `rgba(var(--cadoi-light-rgb), 0.4)`,
          30: `rgba(var(--cadoi-light-rgb), 0.3)`,
          20: `rgba(var(--cadoi-light-rgb), 0.2)`,
          10: `rgba(var(--cadoi-light-rgb), 0.1)`,
        },
        dark: {
          DEFAULT: `rgba(var(--cadoi-dark-rgb), 1)`,
          90: `rgba(var(--cadoi-dark-rgb), 0.9)`,
          80: `rgba(var(--cadoi-dark-rgb), 0.8)`,
          70: `rgba(var(--cadoi-dark-rgb), 0.7)`,
          60: `rgba(var(--cadoi-dark-rgb), 0.6)`,
          50: `rgba(var(--cadoi-dark-rgb), 0.5)`,
          40: `rgba(var(--cadoi-dark-rgb), 0.4)`,
          30: `rgba(var(--cadoi-dark-rgb), 0.3)`,
          20: `rgba(var(--cadoi-dark-rgb), 0.2)`,
          10: `rgba(var(--cadoi-dark-rgb), 0.1)`,
        },
        'primary-text': {
          DEFAULT: `rgba(var(--cadoi-primary-text-rgb), 1)`,
          90: `rgba(var(--cadoi-primary-text-rgb), 0.9)`,
          80: `rgba(var(--cadoi-primary-text-rgb), 0.8)`,
          70: `rgba(var(--cadoi-primary-text-rgb), 0.7)`,
          60: `rgba(var(--cadoi-primary-text-rgb), 0.6)`,
          50: `rgba(var(--cadoi-primary-text-rgb), 0.5)`,
          40: `rgba(var(--cadoi-primary-text-rgb), 0.4)`,
          30: `rgba(var(--cadoi-primary-text-rgb), 0.3)`,
          20: `rgba(var(--cadoi-primary-text-rgb), 0.2)`,
          10: `rgba(var(--cadoi-primary-text-rgb), 0.1)`,
        },
        'secondary-text': {
          DEFAULT: `rgba(var(--cadoi-secondary-text-rgb), 1)`,
          90: `rgba(var(--cadoi-secondary-text-rgb), 0.9)`,
          80: `rgba(var(--cadoi-secondary-text-rgb), 0.8)`,
          70: `rgba(var(--cadoi-secondary-text-rgb), 0.7)`,
          60: `rgba(var(--cadoi-secondary-text-rgb), 0.6)`,
          50: `rgba(var(--cadoi-secondary-text-rgb), 0.5)`,
          40: `rgba(var(--cadoi-secondary-text-rgb), 0.4)`,
          30: `rgba(var(--cadoi-secondary-text-rgb), 0.3)`,
          20: `rgba(var(--cadoi-secondary-text-rgb), 0.2)`,
          10: `rgba(var(--cadoi-secondary-text-rgb), 0.1)`,
        },
        'ternary-text': {
          DEFAULT: `rgba(var(--cadoi-text-ternary-rgb), 1)`,
          90: `rgba(var(--cadoi-text-ternary-rgb), 0.9)`,
          80: `rgba(var(--cadoi-text-ternary-rgb), 0.8)`,
          70: `rgba(var(--cadoi-text-ternary-rgb), 0.7)`,
          60: `rgba(var(--cadoi-text-ternary-rgb), 0.6)`,
          50: `rgba(var(--cadoi-text-ternary-rgb), 0.5)`,
          40: `rgba(var(--cadoi-text-ternary-rgb), 0.4)`,
          30: `rgba(var(--cadoi-text-ternary-rgb), 0.3)`,
          20: `rgba(var(--cadoi-text-ternary-rgb), 0.2)`,
          10: `rgba(var(--cadoi-text-ternary-rgb), 0.1)`,
        },
        'primary-bg': {
          DEFAULT: `rgba(var(--cadoi-primary-bg-rgb), 1)`,
          90: `rgba(var(--cadoi-primary-bg-rgb), 0.9)`,
          80: `rgba(var(--cadoi-primary-bg-rgb), 0.8)`,
          70: `rgba(var(--cadoi-primary-bg-rgb), 0.7)`,
          60: `rgba(var(--cadoi-primary-bg-rgb), 0.6)`,
          50: `rgba(var(--cadoi-primary-bg-rgb), 0.5)`,
          40: `rgba(var(--cadoi-primary-bg-rgb), 0.4)`,
          30: `rgba(var(--cadoi-primary-bg-rgb), 0.3)`,
          20: `rgba(var(--cadoi-primary-bg-rgb), 0.2)`,
          10: `rgba(var(--cadoi-primary-bg-rgb), 0.1)`,
        },
        'secondary-bg': {
          DEFAULT: `rgba(var(--cadoi-secondary-bg-rgb), 1)`,
          90: `rgba(var(--cadoi-secondary-bg-rgb), 0.9)`,
          80: `rgba(var(--cadoi-secondary-bg-rgb), 0.8)`,
          70: `rgba(var(--cadoi-secondary-bg-rgb), 0.7)`,
          60: `rgba(var(--cadoi-secondary-bg-rgb), 0.6)`,
          50: `rgba(var(--cadoi-secondary-bg-rgb), 0.5)`,
          40: `rgba(var(--cadoi-secondary-bg-rgb), 0.4)`,
          30: `rgba(var(--cadoi-secondary-bg-rgb), 0.3)`,
          20: `rgba(var(--cadoi-secondary-bg-rgb), 0.2)`,
          10: `rgba(var(--cadoi-secondary-bg-rgb), 0.1)`,
        },
        'primary-border': {
          DEFAULT: `rgba(var(--cadoi-primary-border-rgb), 1)`,
          90: `rgba(var(--cadoi-primary-border-rgb), 0.9)`,
          80: `rgba(var(--cadoi-primary-border-rgb), 0.8)`,
          70: `rgba(var(--cadoi-primary-border-rgb), 0.7)`,
          60: `rgba(var(--cadoi-primary-border-rgb), 0.6)`,
          50: `rgba(var(--cadoi-primary-border-rgb), 0.5)`,
          40: `rgba(var(--cadoi-primary-border-rgb), 0.4)`,
          30: `rgba(var(--cadoi-primary-border-rgb), 0.3)`,
          20: `rgba(var(--cadoi-primary-border-rgb), 0.2)`,
          10: `rgba(var(--cadoi-primary-border-rgb), 0.1)`,
        },
        'secondary-border': {
          DEFAULT: `rgba(var(--cadoi-secondary-border-rgb), 1)`,
          90: `rgba(var(--cadoi-secondary-border-rgb), 0.9)`,
          80: `rgba(var(--cadoi-secondary-border-rgb), 0.8)`,
          70: `rgba(var(--cadoi-secondary-border-rgb), 0.7)`,
          60: `rgba(var(--cadoi-secondary-border-rgb), 0.6)`,
          50: `rgba(var(--cadoi-secondary-border-rgb), 0.5)`,
          40: `rgba(var(--cadoi-secondary-border-rgb), 0.4)`,
          30: `rgba(var(--cadoi-secondary-border-rgb), 0.3)`,
          20: `rgba(var(--cadoi-secondary-border-rgb), 0.2)`,
          10: `rgba(var(--cadoi-secondary-border-rgb), 0.1)`,
        },
        'primary-btn-bg': {
          DEFAULT: `rgba(var(--cadoi-primary-btn-bg-rgb), 1)`,
          90: `rgba(var(--cadoi-primary-btn-bg-rgb), 0.9)`,
          80: `rgba(var(--cadoi-primary-btn-bg-rgb), 0.8)`,
          70: `rgba(var(--cadoi-primary-btn-bg-rgb), 0.7)`,
          60: `rgba(var(--cadoi-primary-btn-bg-rgb), 0.6)`,
          50: `rgba(var(--cadoi-primary-btn-bg-rgb), 0.5)`,
          40: `rgba(var(--cadoi-primary-btn-bg-rgb), 0.4)`,
          30: `rgba(var(--cadoi-primary-btn-bg-rgb), 0.3)`,
          20: `rgba(var(--cadoi-primary-btn-bg-rgb), 0.2)`,
          10: `rgba(var(--cadoi-primary-btn-bg-rgb), 0.1)`,
        },
        'primary-btn-text': {
          DEFAULT: `rgba(var(--cadoi-primary-btn-text-rgb), 1)`,
          90: `rgba(var(--cadoi-primary-btn-text-rgb), 0.9)`,
          80: `rgba(var(--cadoi-primary-btn-text-rgb), 0.8)`,
          70: `rgba(var(--cadoi-primary-btn-text-rgb), 0.7)`,
          60: `rgba(var(--cadoi-primary-btn-text-rgb), 0.6)`,
          50: `rgba(var(--cadoi-primary-btn-text-rgb), 0.5)`,
          40: `rgba(var(--cadoi-primary-btn-text-rgb), 0.4)`,
          30: `rgba(var(--cadoi-primary-btn-text-rgb), 0.3)`,
          20: `rgba(var(--cadoi-primary-btn-text-rgb), 0.2)`,
          10: `rgba(var(--cadoi-primary-btn-text-rgb), 0.1)`,
        },
        'primary-btn-bg-hover': {
          DEFAULT: `rgba(var(--cadoi-primary-btn-bg-hover-rgb), 1)`,
          90: `rgba(var(--cadoi-primary-btn-bg-hover-rgb), 0.9)`,
          80: `rgba(var(--cadoi-primary-btn-bg-hover-rgb), 0.8)`,
          70: `rgba(var(--cadoi-primary-btn-bg-hover-rgb), 0.7)`,
          60: `rgba(var(--cadoi-primary-btn-bg-hover-rgb), 0.6)`,
          50: `rgba(var(--cadoi-primary-btn-bg-hover-rgb), 0.5)`,
          40: `rgba(var(--cadoi-primary-btn-bg-hover-rgb), 0.4)`,
          30: `rgba(var(--cadoi-primary-btn-bg-hover-rgb), 0.3)`,
          20: `rgba(var(--cadoi-primary-btn-bg-hover-rgb), 0.2)`,
          10: `rgba(var(--cadoi-primary-btn-bg-hover-rgb), 0.1)`,
        },
        'primary-btn-text-hover': {
          DEFAULT: `rgba(var(--cadoi-primary-btn-text-hover-rgb), 1)`,
          90: `rgba(var(--cadoi-primary-btn-text-hover-rgb), 0.9)`,
          80: `rgba(var(--cadoi-primary-btn-text-hover-rgb), 0.8)`,
          70: `rgba(var(--cadoi-primary-btn-text-hover-rgb), 0.7)`,
          60: `rgba(var(--cadoi-primary-btn-text-hover-rgb), 0.6)`,
          50: `rgba(var(--cadoi-primary-btn-text-hover-rgb), 0.5)`,
          40: `rgba(var(--cadoi-primary-btn-text-hover-rgb), 0.4)`,
          30: `rgba(var(--cadoi-primary-btn-text-hover-rgb), 0.3)`,
          20: `rgba(var(--cadoi-primary-btn-text-hover-rgb), 0.2)`,
          10: `rgba(var(--cadoi-primary-btn-text-hover-rgb), 0.1)`,
        },
        'secondary-btn-bg': {
          DEFAULT: `rgba(var(--cadoi-secondary-btn-bg-rgb), 1)`,
          90: `rgba(var(--cadoi-secondary-btn-bg-rgb), 0.9)`,
          80: `rgba(var(--cadoi-secondary-btn-bg-rgb), 0.8)`,
          70: `rgba(var(--cadoi-secondary-btn-bg-rgb), 0.7)`,
          60: `rgba(var(--cadoi-secondary-btn-bg-rgb), 0.6)`,
          50: `rgba(var(--cadoi-secondary-btn-bg-rgb), 0.5)`,
          40: `rgba(var(--cadoi-secondary-btn-bg-rgb), 0.4)`,
          30: `rgba(var(--cadoi-secondary-btn-bg-rgb), 0.3)`,
          20: `rgba(var(--cadoi-secondary-btn-bg-rgb), 0.2)`,
          10: `rgba(var(--cadoi-secondary-btn-bg-rgb), 0.1)`,
        },
        'secondary-btn-text': {
          DEFAULT: `rgba(var(--cadoi-secondary-btn-text-rgb), 1)`,
          90: `rgba(var(--cadoi-secondary-btn-text-rgb), 0.9)`,
          80: `rgba(var(--cadoi-secondary-btn-text-rgb), 0.8)`,
          70: `rgba(var(--cadoi-secondary-btn-text-rgb), 0.7)`,
          60: `rgba(var(--cadoi-secondary-btn-text-rgb), 0.6)`,
          50: `rgba(var(--cadoi-secondary-btn-text-rgb), 0.5)`,
          40: `rgba(var(--cadoi-secondary-btn-text-rgb), 0.4)`,
          30: `rgba(var(--cadoi-secondary-btn-text-rgb), 0.3)`,
          20: `rgba(var(--cadoi-secondary-btn-text-rgb), 0.2)`,
          10: `rgba(var(--cadoi-secondary-btn-text-rgb), 0.1)`,
        },
        'secondary-btn-bg-hover': {
          DEFAULT: `rgba(var(--cadoi-secondary-btn-bg-hover-rgb), 1)`,
          90: `rgba(var(--cadoi-secondary-btn-bg-hover-rgb), 0.9)`,
          80: `rgba(var(--cadoi-secondary-btn-bg-hover-rgb), 0.8)`,
          70: `rgba(var(--cadoi-secondary-btn-bg-hover-rgb), 0.7)`,
          60: `rgba(var(--cadoi-secondary-btn-bg-hover-rgb), 0.6)`,
          50: `rgba(var(--cadoi-secondary-btn-bg-hover-rgb), 0.5)`,
          40: `rgba(var(--cadoi-secondary-btn-bg-hover-rgb), 0.4)`,
          30: `rgba(var(--cadoi-secondary-btn-bg-hover-rgb), 0.3)`,
          20: `rgba(var(--cadoi-secondary-btn-bg-hover-rgb), 0.2)`,
          10: `rgba(var(--cadoi-secondary-btn-bg-hover-rgb), 0.1)`,
        },
        'secondary-btn-text-hover': {
          DEFAULT: `rgba(var(--cadoi-secondary-btn-text-hover-rgb), 1)`,
          90: `rgba(var(--cadoi-secondary-btn-text-hover-rgb), 0.9)`,
          80: `rgba(var(--cadoi-secondary-btn-text-hover-rgb), 0.8)`,
          70: `rgba(var(--cadoi-secondary-btn-text-hover-rgb), 0.7)`,
          60: `rgba(var(--cadoi-secondary-btn-text-hover-rgb), 0.6)`,
          50: `rgba(var(--cadoi-secondary-btn-text-hover-rgb), 0.5)`,
          40: `rgba(var(--cadoi-secondary-btn-text-hover-rgb), 0.4)`,
          30: `rgba(var(--cadoi-secondary-btn-text-hover-rgb), 0.3)`,
          20: `rgba(var(--cadoi-secondary-btn-text-hover-rgb), 0.2)`,
          10: `rgba(var(--cadoi-secondary-btn-text-hover-rgb), 0.1)`,
        },
        success: {
          DEFAULT: 'rgba(var(--cadoi-success-rgb), 1)',
          10: 'rgba(var(--cadoi-success-rgb), 0.1)',
          20: 'rgba(var(--cadoi-success-rgb), 0.2)',
          30: 'rgba(var(--cadoi-success-rgb), 0.3)',
          40: 'rgba(var(--cadoi-success-rgb), 0.4)',
          50: 'rgba(var(--cadoi-success-rgb), 0.5)',
          60: 'rgba(var(--cadoi-success-rgb), 0.6)',
          70: 'rgba(var(--cadoi-success-rgb), 0.7)',
          80: 'rgba(var(--cadoi-success-rgb), 0.8)',
          90: 'rgba(var(--cadoi-success-rgb), 0.9)',
        },
        info: {
          DEFAULT: 'rgba(var(--cadoi-info-rgb), 1)',
          10: 'rgba(var(--cadoi-info-rgb), 0.1)',
          20: 'rgba(var(--cadoi-info-rgb), 0.2)',
          30: 'rgba(var(--cadoi-info-rgb), 0.3)',
          40: 'rgba(var(--cadoi-info-rgb), 0.4)',
          50: 'rgba(var(--cadoi-info-rgb), 0.5)',
          60: 'rgba(var(--cadoi-info-rgb), 0.6)',
          70: 'rgba(var(--cadoi-info-rgb), 0.7)',
          80: 'rgba(var(--cadoi-info-rgb), 0.8)',
          90: 'rgba(var(--cadoi-info-rgb), 0.9)',
        },
        error: {
          DEFAULT: 'rgba(var(--cadoi-error-rgb), 1)',
          10: 'rgba(var(--cadoi-error-rgb), 0.1)',
          20: 'rgba(var(--cadoi-error-rgb), 0.2)',
          30: 'rgba(var(--cadoi-error-rgb), 0.3)',
          40: 'rgba(var(--cadoi-error-rgb), 0.4)',
          50: 'rgba(var(--cadoi-error-rgb), 0.5)',
          60: 'rgba(var(--cadoi-error-rgb), 0.6)',
          70: 'rgba(var(--cadoi-error-rgb), 0.7)',
          80: 'rgba(var(--cadoi-error-rgb), 0.8)',
          90: 'rgba(var(--cadoi-error-rgb), 0.9)',
        },
      },
    },
  },
  plugins: [],
};
