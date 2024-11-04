import {ReactComponent as TeaIcon} from '../../assets/svg/menu-icons/teapot.svg'
import {ReactComponent as HoneyIcon} from '../../assets/svg/menu-icons/honey.svg'
import {ReactComponent as HerbsIcon} from '../../assets/svg/menu-icons/herbs.svg'
import {ReactComponent as BottleIcon} from '../../assets/svg/menu-icons/bottle.svg'
import {ReactComponent as BerryIcon} from '../../assets/svg/menu-icons/berry.svg'
import {ReactComponent as JamIcon} from '../../assets/svg/menu-icons/jam-jar.svg'

export const MenuIcons = ({name}) => {
  switch(name){
    case 'tea': return (
        <TeaIcon />
      );
    
    case 'honey': return (
       <HoneyIcon />
    );

    case 'herbs': return (
        <HerbsIcon /> 
    );

    case 'tinctures': return (
        <BottleIcon />
    );

    case 'berries': return (
        <BerryIcon />
    );

    case 'jam': return (
        <JamIcon />
    );

  }
};