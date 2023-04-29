import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  let name = 'park';

  return (
    <div>
     
      <h4 style={{ color: `red`, fontSize: `30px` }} className='title'>KOBY FRESH</h4>
      <p className='title-sub'>by dev {name}</p>
    </div>
  );
}
