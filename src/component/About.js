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
        <p className='ml-auto mb-20 max-w-[600px]'>Nous cherchons constamment à progresser, avec des habitudes quotidiennes qui vont nous faire devenir meilleur que la veille. Mais crée une nouvelle habitude c’est difficile, autant quand trouver une bonne qui nous fera aller de l’avant.</p>
        </CustomFade>
    <CustomFade>
    <h2 className='max-w-[950px] mb-20 font-bold text-center sm:text-left sm:text-[50px] text-[30px]'><span className='custom-text'>Atomic Habits </span>sera là de la création de votre habitude jusqu’à l’encrage de celle-ci dans votre routine et plus loin encore...</h2>
    </CustomFade>

    <div className="custom-grid">
        <CustomFade>
        <div className="sm:mb-0 mb-20">
            <div className="flex items-center mb-5">
                <img src={progress} alt="progress icone " className='sm:h-[50px] h-[35px] mr-5' />
                <h3 className='custom-text font-bold sm:text-[50px] text-[35px]'>Progresser</h3>
            </div>
            <p className='sm:text-[25px] text-[20px]'>Vous verrez votre habitude comme un objectif à atteindre entre 15 et 30 jours en passant par différents paliers.</p>
        </div>
        </CustomFade>
        <CustomFade>

        <div className="mb-20">
            <div className="flex items-center mb-5">
                <img src={learn} alt="book icone" className='sm:h-[50px] h-[35px] mr-5'/>
                <h3 className='custom-text-learn font-bold sm:text-[50px] text-[35px]'>Apprendre</h3>
            </div>
            <p className='sm:text-[25px] text-[20px]'>Bien sûr trouver une bonne habitude n’est pas toujours facile, pour vous aidez nous avons créez une série d’articles sur différentes habitudes. </p>
        </div>
        </CustomFade>
        <CustomFade>

        <div className="sm:mb-0 mb-20">
            <div className="flex items-center mb-5">
                <img src={statistics} alt="statistics icone" className='sm:h-[50px] h-[35px] mr-5'/>
                <h3 className='custom-text-stat font-bold sm:text-[50px] text-[35px]'>Statistiques</h3>
            </div>
            <p className='sm:text-[25px] text-[20px]'>Des statistiques en temps réel vous seront proposés pour voir l’entièreté de la progression de vos habitudes ou d’une habitude en particulier.</p>
        </div>
        </CustomFade>
        <CustomFade>

        <div className="">
            <div className="flex items-center mb-5">
                <img src={more} alt="more icone" className='sm:h-[50px] h-[35px] mr-5' />
                <h3 className='custom-text-more font-bold sm:text-[50px] text-[35px] whitespace-nowrap'>Et bien plus...</h3>
            </div>
            <p className='sm:text-[25px] text-[20px]'>Vous pourrez partagez des habitudes avec vos amis, utiliser vos donner de santé pour automatiser le suivies...</p>
        </div>
        </CustomFade>

    </div>
    </section>
  )
}

export default About