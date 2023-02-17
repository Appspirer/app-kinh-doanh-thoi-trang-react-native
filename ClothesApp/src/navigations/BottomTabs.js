import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, Product, Order, Account } from '../screens';
import Icons from '../themes/Icons';
import Colors from '../themes/Colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: Colors.black_focus,
            tabBarStyle:{
                height:60,
                paddingTop:5,
                backgroundColor:Colors.white,
                shadowColor:Colors.black,
                shadowOffset:{
                    height:0
                },
                shadowOpacity:0.1,
            }
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? 'home_focus' : 'home', height: 24, width: 24 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Product"
                component={Product}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? 'product_focus' : 'product', height: 30, width: 30 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Order"
                component={Order}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? 'order_focus' : 'order', height: 24, width: 24 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Icons.Icons({ name: focused ? 'account_focus' : 'account', height: 24, width: 24 })}
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}