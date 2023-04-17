import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/splashScreen';
import LoadingScreen from './components/loadingScreen';
import OnboardingScreen from './screens/onboarding/onboardingScreen';
import LoginScreen from './screens/auth/loginScreen';
import ForgetPasswordScreen from './screens/auth/forgetPasswordScreen';
import CheckForgetPasswordScreen from './screens/auth/checkForgetPasswordScreen';
import CreatePasswordScreen from './screens/auth/createPasswordScreen';
import RegisterScreen from './screens/auth/registerScreen';
import VerificationScreen from './screens/auth/verificationScreen';
import BottomTabBarScreen from './components/bottomTabBarScreen';
import QuizCategoriesScreen from './screens/quizCategories/quizCategoriesScreen';
import JoinQuizScreen from './screens/joinQuiz/joinQuizScreen';
import JoinQuizDetailScreen from './screens/joinQuizDetail/joinQuizDetailScreen';
import QuizScreen from './screens/quiz/quizScreen';
import QuizResultScreen from './screens/quizResult/quizResultScreen';
import SelectFriendScreen from './screens/selectFriend/selectFriendScreen';
import StartQuizWithFriendScreen from './screens/startQuizWithFriend/startQuizWithFriendScreen';
import GroupQuizScreen from './screens/groupQuiz/groupQuizScreen';
import GroupQuizResultScreen from './screens/groupQuizResult/groupQuizResultScreen';
import CreateQuizQuestionsScreen from './screens/createQuizQuestions/createQuizQuestionsScreen';
import CreateQuizSuccessfullyScreen from './screens/createQuizSuccessfully/createQuizSuccessfullyScreen';
import EditProfileScreen from './screens/editProfile/editProfileScreen';
import NotificationScreen from './screens/notification/notificationScreen';
import ReferFriendScreen from './screens/referFriend/referFriendScreen';
import FaqsScreen from './screens/faqs/faqsScreen';
import ContactUsScreen from './screens/contactUs/contactUsScreen';
import { LogBox } from 'react-native'

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

function MyApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="CheckForgetPassword" component={CheckForgetPasswordScreen} />
        <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="BottomTabBar" component={BottomTabBarScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="QuizCategories" component={QuizCategoriesScreen} />
        <Stack.Screen name="JoinQuiz" component={JoinQuizScreen} />
        <Stack.Screen name="JoinQuizDetail" component={JoinQuizDetailScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="QuizResult" component={QuizResultScreen} options={{ ...TransitionPresets.ModalSlideFromBottomIOS }} />
        <Stack.Screen name="SelectFriend" component={SelectFriendScreen} />
        <Stack.Screen name="StartQuizWithFriend" component={StartQuizWithFriendScreen} />
        <Stack.Screen name="GroupQuiz" component={GroupQuizScreen} />
        <Stack.Screen name="GroupQuizResult" component={GroupQuizResultScreen} options={{ ...TransitionPresets.ModalSlideFromBottomIOS }} />
        <Stack.Screen name="CreateQuizQuestions" component={CreateQuizQuestionsScreen} />
        <Stack.Screen name="CreateQuizSuccessfully" component={CreateQuizSuccessfullyScreen} options={{ ...TransitionPresets.ModalSlideFromBottomIOS }} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="ReferFriend" component={ReferFriendScreen} />
        <Stack.Screen name="Faqs" component={FaqsScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;