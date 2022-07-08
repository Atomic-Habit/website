import React from 'react';
import learn from '../images/learn-icone.png';
import more from '../images/more-icone.png';
import statistics from '../images/statistics-icone.png';
import progress from '../images/progress-icone.png';
import CustomFade from './CustomFade';


function About() {
  return (
    <section id='about' className='sm:px-20 px-10 text-black pt-40 lg:mb-40 sm:mb-20'>
        <CustomFade>
        <p className='ml-auto mb-20 max-w-[600px]'>Nous cherchons constamment à progresser. Des habitudes quotidiennes nous aident à devenir meilleur jour après jour. Si créer une nouvelle habitude vous sembler difficile tout autant que trouver une bonne habitude, nous vous aidons à relever les défis qui vous feront aller de l’avant.</p>
        </CustomFade>
    <CustomFade>
    <h2 className='max-w-[950px] mb-20 font-bold text-center sm:text-left sm:text-[50px] text-[30px]'><span className='custom-text'>Atomic Habits </span>est une application qui vous accompagne dans la création de votre habitude jusqu’à l'ancrage de celle-ci dans votre routine quotidienne et plus loin encore...</h2>
    </CustomFade>

    <div className="custom-grid">
        <CustomFade>
        <div className="sm:mb-0 mb-20">
            <div className="flex items-center mb-5">
                <img src={progress} alt="progress icone " className='sm:h-[50px] h-[35px] mr-5' />
                <h3 className='custom-text font-bold sm:text-[50px] text-[35px]'>Progresser</h3>
            </div>
            <p className='sm:text-[25px] text-[20px]'>Voyez votre habitude comme un objectif à atteindre jour après jour. Progressez en passant par différents paliers. Il suffit de seulement quelques semaines pour que vos nouvelles bonnes habitudes vous transforment.</p>
        </div>
        </CustomFade>
        <CustomFade>

        <div className="mb-20">
            <div className="flex items-center mb-5">
                <img src={learn} alt="book icone" className='sm:h-[50px] h-[35px] mr-5'/>
                <h3 className='custom-text-learn font-bold sm:text-[50px] text-[35px]'>Apprendre</h3>
            </div>
            <p className='sm:text-[25px] text-[20px]'>Prenez les nouvelles habitudes à développer comme un apprentissage. Il vous manque de la motivation ? Trouvez là dans nos articles depuis lesquels vous pourrez ajouter une nouvelle habitude à votre routine en un clic.</p>
        </div>
        </CustomFade>
        <CustomFade>

        <div className="sm:mb-0 mb-20">
            <div className="flex items-center mb-5">
                <img src={statistics} alt="statistics icone" className='sm:h-[50px] h-[35px] mr-5'/>
                <h3 className='custom-text-stat font-bold sm:text-[50px] text-[35px]'>Statistiques</h3>
            </div>
            <p className='sm:text-[25px] text-[20px]'>Suivez vos progrès avec des statistiques en temps réel. Votre progression au quotidien développera votre motivation. Cette nouvelle motivation ancrera davantage vos routines.</p>
        </div>
        </CustomFade>
        <CustomFade>

        <div className="">
            <div className="flex items-center mb-5">
                <img src={more} alt="more icone" className='sm:h-[50px] h-[35px] mr-5' />
                <h3 className='custom-text-more font-bold sm:text-[50px] text-[35px] whitespace-nowrap'>Et bien plus...</h3>
            </div>
            <p className='sm:text-[25px] text-[20px]'>Créez votre propre routine. Ajoutez-lui les habitudes que vous souhaitez développer. N’ayez aucune limite : lisez, buvez (de l’eau), dormez, méditez, saluez votre voisin…</p>
        </div>
        </CustomFade>

    </div>
    </section>
  )
}

export default About