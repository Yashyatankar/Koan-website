import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

function Button({ text = "", icon = true, className = "" }) {


  return (
    <button className={`avancio-btn ${className}`}>
      <span>{text}</span>
      {icon && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="19" x2="19" y2="5" />
          <polyline points="9 5 19 5 19 15" />
        </svg>
      )}

      <style>{`
        .avancio-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 32px;
          border: 1.5px solid #fff;
          border-radius: 999px;
          background: transparent;
          color: #fff;
          font-size: 18px;
          font-family: inherit;
          cursor: pointer;
          overflow: hidden;
          isolation: isolate;
          transition: color 0.4s ease;
        }

        .avancio-btn::before {
          content: "";
          position: absolute;
          left: 6px;
          top: 50%;
          width: 18px;
          height: 18px;
          background: #fff;
          border-radius: 50%;
          transform: translateY(-50%) scale(1);
          transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
          z-index: -1;
        }

        .avancio-btn:hover::before {
          transform: translateY(-50%) scale(40);
        }

        .avancio-btn:hover {
          color: #000;
        }

        .avancio-btn span,
        .avancio-btn svg {
          position: relative;
          z-index: 1;
          transition: transform 0.4s ease;
        }

        .avancio-btn:hover span {
          transform: translateX(4px);
        }

        .avancio-btn:hover svg {
          transform: translate(4px, -4px);
        }
      `}</style>
    </button>
  )
}

export default Button