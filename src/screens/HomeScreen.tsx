import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View className="flex-1 bg-green-500">
        <Text className="text-orange-600 font-bold">HomeScreen</Text>
        <Text className="text-2xl text-black dark:text-white">
          HomeScreen 2
        </Text>
      </View>
    </SafeAreaView>
  );
}
