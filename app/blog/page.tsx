import style from './blog.module.css';
import Image from 'next/image';
import _Kz8nHVg_tGl from '../../public/team/arlington-research-Kz8nHVg_tGI-unsplash.jpg';
import _g1Kr4Ozfoac from '../../public/team/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';
import _5fNmWej4tAA from '../../public/team/scott-graham-5fNmWej4tAA-unsplash.jpg';

export default function Blog() {
    return (
      <>
        <h1>О компании</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet eum neque corrupti nemo voluptas sint libero aliquid voluptates sed. Ad voluptatem error adipisci dolore recusandae iste. Porro, animi. Impedit?</p>
        </div>

        <div className={style.item}>
            <h3>Отдел маркетинга</h3>
            <div className={style.content}>
                <Image className={style.image}
                src={_Kz8nHVg_tGl}
                alt="https://unsplash.com/photos/Kz8nHVg_tGI" />
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet eum neque corrupti nemo voluptas sint libero aliquid voluptates sed. Ad voluptatem error adipisci dolore recusandae iste. Porro, animi. Impedit?</div>
            </div>

            <div className={style.item}>
                <h3>Инженеры-разработчики</h3>
                <div className={style.content}>
                <Image
                className={style.image}
                src={_g1Kr4Ozfoac}
                alt="https://unsplash.com/photos/g1Kr4Ozfoac" />
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet eum neque corrupti nemo voluptas sint libero aliquid voluptates sed. Ad voluptatem error adipisci dolore recusandae iste. Porro, animi. Impedit?</div>
            </div>

            <div className={style.item}>
                <h3>Отдел продаж</h3>
                <div className={style.content}>
                <Image
                className={style.image}
                src={_5fNmWej4tAA}
                alt="https://unsplash.com/photos/5fNmWej4tAA" />
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet eum neque corrupti nemo voluptas sint libero aliquid voluptates sed. Ad voluptatem error adipisci dolore recusandae iste. Porro, animi. Impedit?</div>
                </div>
            </div>
        </div>
    </div>
      </>
    )
  }