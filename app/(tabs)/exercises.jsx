import { View, Text, ScrollView } from "react-native";


export default function Exercise() {
    const exercises = [
        { title: 'Exercises 3', description: 'desc' },
        { title: 'Exercises 4', description: 'desc' },
        { title: 'Exercises 5', description: 'desc' },
        { title: 'Exercises 5', description: 'desc' },
        { title: 'Exercises 5', description: '<ul><li>Email (Text Input)</li>' },
    ];

    return (
        <ScrollView>
            {exercises.map((exercise, index) => {
                return (
                    <View key={index}>
                        <Text>{exercise.title}</Text>
                        <Text>{exercise.description}</Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}