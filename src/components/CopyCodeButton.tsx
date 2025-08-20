import { useEffect } from "react";

export default function CopyCodeButton() {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll('pre');
    const buttonCount = new Map<HTMLPreElement, boolean>();
    
    codeBlocks.forEach((block) => {
      // Skip if already has a button
      if (block.querySelector('.copy-code-button')) return;
      
      // Create wrapper if needed
      if (!block.parentElement?.classList.contains('code-block-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        block.parentNode?.insertBefore(wrapper, block);
        wrapper.appendChild(block);
      }
      
      // Create button
      const button = document.createElement('button');
      button.className = 'copy-code-button';
      button.type = 'button';
      button.setAttribute('aria-label', 'Copy code to clipboard');
      
      // Add icon
      const iconSpan = document.createElement('span');
      iconSpan.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"><rect width="336" height="336" x="128" y="128" fill="none" stroke-linejoin="round" stroke-width="32" rx="57" ry="57"></rect><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"></path></svg>';
      button.appendChild(iconSpan);
      
      // Add click handler
      button.addEventListener('click', async () => {
        const code = block.querySelector('code');
        const text = code?.textContent || '';
        
        try {
          await navigator.clipboard.writeText(text);
          iconSpan.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 128 240 384l-96-96"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 384 32 272"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 128 232 284"></path></svg>';
          
          setTimeout(() => {
            iconSpan.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"><rect width="336" height="336" x="128" y="128" fill="none" stroke-linejoin="round" stroke-width="32" rx="57" ry="57"></rect><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24"></path></svg>';
          }, 700);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      });
      
      // Append button to wrapper
      block.parentElement?.appendChild(button);
      buttonCount.set(block, false);
    });
    
  }, []);

  return null; // This component doesn't render anything itself
}