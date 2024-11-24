let mainBg_Color = '#040D12';
let bg_Color = '#183d3d00';
let text_Color = '#93B1A6';

const toggleBtn = document.querySelector('#darkToggle');
const sectionElement = document.querySelector('section');
const containerElement = document.querySelector('.container');

if (!toggleBtn) {
    console.error("Toggle button not found");
} else if (!sectionElement || !containerElement) {
    console.error("Required elements not found");
} else {
    console.log(sectionElement, containerElement);
    console.log(mainBg_Color, bg_Color, text_Color);

    toggleBtn.addEventListener('click', function () {
       
        const colors = change(mainBg_Color, bg_Color, text_Color);

        
        mainBg_Color = colors.mainBg_Color;
        bg_Color = colors.bg_Color;
        text_Color = colors.text_Color;
    });
}

function change(mainBg_Color, bg_Color, text_Color) {
    
    const isDarkTheme =
        mainBg_Color === '#040D12' &&
        bg_Color === '#183d3d00' &&
        text_Color === '#93B1A6';

    
    mainBg_Color = isDarkTheme ? '#93B1A6' : '#040D12';
    bg_Color = isDarkTheme ? '#5C8374' : '#183d3d00';
    text_Color = isDarkTheme ? '#183D3D' : '#93B1A6';

    
    sectionElement.style.backgroundColor = mainBg_Color;
    containerElement.style.backgroundColor = bg_Color;
    containerElement.style.color = text_Color;
    toggleBtn.style.backgroundColor=bg_Color
    toggleBtn.style.color=text_Color
    
    console.log(mainBg_Color, bg_Color, text_Color);

    
    return { mainBg_Color, bg_Color, text_Color };
}
