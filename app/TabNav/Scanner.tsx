import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Image, ScrollView} from 'react-native';
import Nav from '@comp/nav';
import Footer from '@comp/footer';
export default function Scanner(){
    return(
        <>


            <ScrollView>

            <View style={styles.container}>
            <Image
        
            source={require('@assets/Vector.png')}
            />
            </View>
            </ScrollView>
        

        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 525,
        backgroundColor: '#FBFBFB',
        alignItems: 'center',
        justifyContent:'center'
    },
    cont2:{
        height: 200,
    }

}

)
