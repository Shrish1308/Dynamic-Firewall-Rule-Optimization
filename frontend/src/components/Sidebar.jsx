import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const NAV_ITEMS = [
  { to: '/',           label: 'Dashboard' },
  { to: '/rules',      label: 'Rules' },
  { to: '/analysis',   label: 'Analysis' },
  { to: '/simulator',  label: 'Simulator' },
  { to: '/optimize',   label: 'Optimization' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon" style={{ background: 'transparent', padding: 0 }}>
          <img src={logo} alt="Dynamic Firewall Rule Optimization" style={{ width: 28, height: 28, borderRadius: 6, objectFit: 'contain', display: 'block' }} />
        </div>
        <div className="sidebar-logo-text" style={{ fontSize: '0.82rem', lineHeight: 1.25 }}>
          Dynamic Firewall Rule Optimization
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <div className="sidebar-label">Navigation</div>
        {NAV_ITEMS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div style={{ marginBottom: 2, fontWeight: 600, color: 'var(--clr-text-dim)' }}>
          Module 0 — Foundation
        </div>
        <div>Mock data active</div>
      </div>
    </aside>
  );
}
