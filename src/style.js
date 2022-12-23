import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7cbcb',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 3,
    flexGrow: 1,
  },
  header: {
    fontSize: 33,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingTop: 50,
  },
  materialButtonPrimary: {
    height: 45,
    width: '90%',
    backgroundColor: 'rgba(0,0,5,1)',
    borderRadius: 100,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 24,
    shadowOpacity: 0.35,
    shadowRadius: 10,
    alignSelf: 'center',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 40,
    bottom: 0,
  },
  Text: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 80,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  ImageContainer: {
    width: 400,
    height: 400,
    alignSelf: 'center',
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 24,
    shadowOpacity: 0.35,
    shadowRadius: 10,
    left: 80,
    top: 60,
    position: 'absolute',
    flex: 1,
  },
  Image: {
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 24,
    shadowOpacity: 0.35,
    shadowRadius: 10,
    opacity: 0.2,
  },
  paragraph: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4d1919',
    alignSelf: 'flex-start',
    paddingBottom: 30,
    margin: 8,
  },
});
