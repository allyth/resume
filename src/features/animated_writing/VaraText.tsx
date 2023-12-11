import React, { useEffect, useState } from 'react';
import Vara from 'vara';

export const VaraText = ({ text }: { text: string }) => {
    useEffect(() => {
        const varaRoot = document.querySelector('#vara-root');
        let varaContainer = document.querySelector('#vara-container');
        if (varaRoot && varaContainer?.children && varaContainer.children.length > 0) {
            varaContainer?.remove();
            const newVaraContainer = document.createElement('div');
            newVaraContainer.setAttribute("id", "vara-container");
            newVaraContainer.setAttribute("className", "z-[20");
            varaRoot?.append(newVaraContainer);
            varaContainer = newVaraContainer;
        }
        var vara = new Vara(
            "#vara-container",
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
            [
              {
                text: text,
                fontSize: 40,
                strokeWidth: 0.7,
                duration:3000
              }
            ]
          );
    }, []);
  
    return (
        <div id="vara-root">
            <div id="vara-container" className="z-[20]"></div>
        </div>
    );
  }