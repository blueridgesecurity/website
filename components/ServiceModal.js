import { Fragment } from 'react';
import { X } from 'react-feather';

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="modalBackdrop" onClick={onClose} role="presentation">
      <div className="modalDialog" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modalClose" aria-label="Close" onClick={onClose}>
          <X size={18} />
        </button>
        <div className="modalBody">
          <h2>{service.name}</h2>
          <p>{service.desc}</p>
          <div style={{marginTop: '1.25rem'}}>
            <a href={service.link} className="btn btn-primary">Learn more</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modalBackdrop{position:fixed;inset:0;background:rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;z-index:60}
        .modalDialog{background:var(--color-bg);color:var(--color-text);max-width:720px;width:calc(100% - 3rem);border-radius:8px;padding:1.25rem;box-shadow:0 10px 30px rgba(0,0,0,0.2);position:relative}
        .modalClose{position:absolute;right:0.6rem;top:0.6rem;border:0;background:transparent;color:var(--color-text-muted-dark);cursor:pointer}
        .modalBody h2{margin:0 0 0.5rem 0;font-size:1.25rem}
        .modalBody p{margin:0;color:var(--color-text-muted-dark);line-height:1.5}
        .btn{display:inline-block;padding:0.55rem 0.85rem;border-radius:6px;text-decoration:none}
        .btn-primary{background:var(--color-primary);color:#fff}
      `}</style>
    </div>
  );
}
