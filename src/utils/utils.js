// responsive breakpoints; 
const screenSize = {
    xs: 0, 
    sm: 600, 
    md: 960, 
    lg: 1280, 
    xl: 1920, 
}; 

const responsiveTheme = {
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        up: key => `@media (min-width: ${screenSize[key]}px)`,
    },
};