import 'package:exp_app/auth.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:provider/provider.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        Provider<AuthService>(
          create: (_) => AuthService(FirebaseAuth.instance),
        ),
        // ignore: missing_required_param
        StreamProvider(
          create: (context) => context.read<AuthService>().authStateChanges,
        )
      ],
      child: MaterialApp(home: AuthenticationWrapper()),
    );
  }
}

class AuthenticationWrapper extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final firebaseUser = context.watch<User>();
    if (firebaseUser != null) {
      return HomePage();
    }
    return SignInPage();
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
          body: Column(
        children: [
          Center(
            child: Text("Home Page"),
          ),
          ElevatedButton(
              onPressed: () {
                context.read<AuthService>().signOut();
              },
              child: Text("Sign Out"))
        ],
      )),
    );
  }
}

class SignInPage extends StatelessWidget {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
          body: Column(
        children: [
          TextField(
            controller: emailController,
            decoration: InputDecoration(
              labelText: "Email",
            ),
          ),
          TextField(
            controller: passwordController,
            decoration: InputDecoration(
              labelText: "Password",
            ),
          ),
          ElevatedButton(
            onPressed: () {
              context.read<AuthService>().signIn(
                    email: emailController.text,
                    password: passwordController.text,
                  );
            },
            child: Text("SignIn"),
          )
        ],
      )),
    );
  }
}

class SignUpPage extends StatelessWidget {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
          body: Column(
        children: [
          TextField(
            controller: emailController,
            decoration: InputDecoration(
              labelText: "Email",
            ),
          ),
          TextField(
            controller: passwordController,
            decoration: InputDecoration(
              labelText: "Password",
            ),
          ),
          ElevatedButton(
            onPressed: () {
              context.read<AuthService>().signUp(
                    email: emailController.text,
                    password: passwordController.text,
                  );
            },
            child: Text("SignUp"),
          )
        ],
      )),
    );
  }
}

// Scaffold(
//           appBar: AppBar(
//             title: Text('EY App'),
//             backgroundColor: Colors.blueGrey[700],
//           ),
//           body: Column(
//             children: [
//               Center(
//                 child: ElevatedButton.icon(
//                   onPressed: () {
//                     // Respond to button press
//                   },
//                   label: Text('CONTAINED BUTTON'),
//                   icon: Icon(Icons.add, size: 18),
//                 ),
//               )
//             ],
//           ),
//           drawer: Drawer(
//             child: ListView(
//               // Important: Remove any padding from the ListView.
//               padding: EdgeInsets.zero,
//               children: <Widget>[
//                 DrawerHeader(
//                   child: Text('Drawer Header'),
//                   decoration: BoxDecoration(
//                     color: Colors.blue,
//                   ),
//                 ),
//                 ListTile(
//                   title: Text('Command Center'),
//                   onTap: () {
//                     // Update the state of the app.
//                     // ...
//                   },
//                 ),
//                 ListTile(
//                   title: Text('Employee'),
//                   onTap: () {
//                     // Update the state of the app.
//                     // ...
//                   },
//                 ),
//                 ListTile(
//                     title: Text('ERT'),
//                     onTap: () {
//                       // Update the state of the app.
//                       // ...
//                     }),
//                 ListTile(
//                     title: Text('Beacon'),
//                     onTap: () {
//                       // Update the state of the app.
//                       // ...
//                     })
//               ],
//             ),
//           ),
//         ),
