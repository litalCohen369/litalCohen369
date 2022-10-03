
// import React, { useContext, useEffect, useLayoutEffect, useRef, useState, Component } from "react";
// import './main.css';

// function DraggingElements() {

//     function setDraggableElement(selector, anchor) {
//         let draggingPoint = null;
//         let currentX = 0;
//         let currentY = 0;
      
//         const element = document.querySelector(selector);
//         if (!element) {
//           throw new Error('element doesn\'t exist');
//         }
//         let initialX = element.offsetLeft;
//         let initialY = element.offsetTop;
//         if (anchor) {
//           draggingPoint = element.querySelector(anchor);
//         }
//         if (!draggingPoint) {
//           draggingPoint = element
//         }
//         draggingPoint.addEventListener('mousedown', bindDrag);
//         draggingPoint.style.cursor = 'all-scroll'
//       }

//   return (
//     <div>
//         <div class="draggable-menu shadow-sm border rounded">
//         <div class="menu-header border-bottom px-3 py-2 d-flex align-items-center">
//             <h1 class="h6 mb-0 me-5">Draggable menu with no anchor</h1>
//         </div>
        
//         <ul class="list-unstyled m-0 py-2">
//             <li><i class="fas fa-copy"></i> Copy</li>
//             <li><i class="fas fa-cut"></i> Cut</li>
//             <li><i class="fas fa-paste"></i> Paste</li>
//             <li><i class="fas fa-pen"></i> Edit</li>
//             <li><i class="fas fa-trash"></i> Remove</li>
//         </ul>
//         </div>


//         {/* <div class="draggable-menu with-anchor shadow-sm border rounded">
//         <div class="menu-header border-bottom px-3 py-2 d-flex align-items-center">
//             <h1 class="h6 mb-0 me-5">Draggable menu with an anchor</h1>
//             <button class="btn btn-light anchor">
//             <i class="fas fa-arrows-alt"></i>
//             Drag me!
//             </button>
//         </div>
        
//         <ul class="list-unstyled m-0 py-2">
//             <li><i class="fas fa-copy"></i> Copy</li>
//             <li><i class="fas fa-cut"></i> Cut</li>
//             <li><i class="fas fa-paste"></i> Paste</li>
//             <li><i class="fas fa-pen"></i> Edit</li>
//             <li><i class="fas fa-trash"></i> Remove</li>
//         </ul>
//         </div> */}
//     </div>
//   );
// }

// export default DraggingElements;
