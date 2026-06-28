import { useNavigate } from 'react-router';
import './index.css'

export function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <span className="eyebrow">Console repair & resale</span>
      <h2 className="hero-text">Restored.<br />Tested.<br /><em>Yours.</em></h2>
      <p className='mw-500'>We breathe new life into classic and modern consoles — repaired by hand, tested until it plays like the day it shipped, sold with confidence.</p>
      <button className='mt-2' onClick={() => navigate('/listings')}>Browse Listings</button>

      <div className='separator'></div>

      <section className='detail-cards'>
        <div>
          <h3>Repaired by Hand</h3>
          <div>
            Each console is diagnosed, disassembled, and fixed — no shortcuts, no guessing.
          </div>
        </div>
        <div>
          <h3>Tested thoroughly</h3>
          <div>
            If it ships, it works. Every unit is play-tested before it goes anywhere near a listing.
          </div>
        </div>
        <div>
          <h3>Priced fairly</h3>
          <div>
            Prices reflect what the repair actually cost, not what the market will bear.
          </div>
        </div>
      </section>
    </>
  );
}
