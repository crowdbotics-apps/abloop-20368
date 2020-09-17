import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2102970Navigator from '../features/BlankScreen2102970/navigator';
import BlankScreen1102969Navigator from '../features/BlankScreen1102969/navigator';
import BlankScreen0102968Navigator from '../features/BlankScreen0102968/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2102970: { screen: BlankScreen2102970Navigator },
BlankScreen1102969: { screen: BlankScreen1102969Navigator },
BlankScreen0102968: { screen: BlankScreen0102968Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
