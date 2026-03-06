export default function AreaAdmin() {
    const [permanentName, setPermanentName] = useState('admin');
    const [permanentPassword, setPermanentPassword] = useState('root-user123');
    
    return (
        <View style={styles.container}>
            <Text>Área do Administrador</Text>
        </View>
    );
}