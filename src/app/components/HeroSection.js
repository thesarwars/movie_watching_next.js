import heroStyle from '@/app/styles/herosection.module.css';
import styles from '@/app/styles/common.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className={heroStyle.main_section}>
        <div className={styles.container}>
            <div className={styles.grid_two_section}>
                <div className={heroStyle.hero_content}>
                    <h1>LET'S WATCH MOVIE TOGETHER</h1>
                    <p>
                        There is lot's of movie that we can through together. 
                    </p>
                    <Link href='/movie'>
                        <button>
                            Explore Movie
                        </button>
                    </Link>
                </div>

                <div className={heroStyle.hero_image}>
                    <Image src="/about1.svg" alt="movie image" height={500} width={500} />
                </div>
            </div>

        </div>
        
    </div>
  )
}
