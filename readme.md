# NERDS template specification

## 1. Common technical requirements
* Markup standards: HTML5, CSS3, progressive improvement; 
* Grid: defined in layout;
* Adaptive markup: none;
* Framework use: none;
* Cross browsing: IE11+, Chrome, Firefox, Opera, Safari;
* Typography: partially defined in layout (other - at the developer discretion);
* Font used: Roboto; 
* Use styleguide.psd, which contains drawing states of interface elements. If there is a difference, styleguide.psd has the highest priority.

## 2. Explanation for the students
* Layout has hidden layers with popups. Such layers in photoshop highlighted by blue color; 
* Layout marked up gradually, no need to do all requirements immediately; 
* In section «Mandatory requirements» below described blocks behavior, which needs to be implemented to receive admission. Requirements from the «Additional requirements» section could be done at will for performing additional criterions;

## 3. Mandatory requirements

### Layout:
* Content block centered and can't be less then layout width; 
* Block with map: sufficient implementation - regular image; 
* Markup of modal window is mandatory (see layer folder «write us»); 
* Main menu: item «Store» need to be leads on inner page catalog.html; 

### index.html:
* Carousel under the main navigation: slider. Markup all of the sliders is mandatory. Slider animation is optional, animation concept described in the 4-th section;  
* Academy logo in partners block leads on [«Professional HTML & CSS, level 1»​ intensive landing page](https://htmlacademy.ru/intensive/htmlcss). 

### catalog.html:
* Logo is a link on the main page; 
* Filter (blocks «Grid», «Features») need to markup up with form, button «Show» is responsible for the form sending;
* Block «Price»: cursor pointer appear, when you hover over any markers, make markers animations is optional, price must not change;
* Product card: product name is a link, on click opens modal window with product demonstration (no layout, no need to markup modal window);
* Product card: when filling with text, text block must not get out of image, buy button must be visible;
* Product quantity in the right section can be any, at the same time page shouldn't be broken.

## 4. Additional requirements

### Layout: 
* Block with map: implementation at will - interactive map (Google Maps or Yandex Maps), map height is constant, width equal to viewport width (but not less then layout width). Map has a marker, the center of the map match with the block center in layout. It is acceptable to use both standard and custom marker;
* After clicking on the button «Write us» a modal window appears with message sending form (see layer folder «write us» in nerds-index.psd), modal window positioned relative to the viewport, but not to page.

### index.html: 
* Carousel under the main navigation: slider animation. Slider changes happen instantly, without intermediate transitions.

### catalog.html: 
* Filter (blocks «Grid», «Features»): clicking on the button «Show» - the form is sent.