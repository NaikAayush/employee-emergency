import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:app_v2/auth.dart';
import 'package:app_v2/beacon.dart';
import 'package:firebase_auth/firebase_auth.dart';
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
      return HomeLoggedInPage();
    }
    return HomePage();
  }
}

class Example extends StatefulWidget {
  Example({Key key}) : super(key: key);
  _ExampleState createState() => _ExampleState();
}

class _ExampleState extends State<Example> {
  @override
  void initState() {
    _getThingsOnStartup().then((value) {
      print('Async done');
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container();
  }

  Future _getThingsOnStartup() async {
    var x = await AuthService(FirebaseAuth.instance).inputData();
    print(x);
  }
}

class Demo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Demo'),
        ),
      ),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SafeArea(
        child: Scaffold(
          backgroundColor: Colors.white,
          body: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Image(
                  image: AssetImage("images/homeImage.png"),
                ),
                Text(
                  "Employee Emergency App",
                  style: GoogleFonts.montserrat(
                    color: Colors.black,
                    fontWeight: FontWeight.w700,
                    fontSize: 36,
                  ),
                  textAlign: TextAlign.center,
                ),
                Text(
                  "In an emergency, you can use it automatically and quickly send out a call for help.",
                  style: GoogleFonts.montserrat(
                    color: Colors.black,
                    fontWeight: FontWeight.w400,
                    fontSize: 18,
                  ),
                  textAlign: TextAlign.center,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    ElevatedButton(
                      onPressed: () {},
                      child: Text(
                        'Sign Up',
                        style: GoogleFonts.montserrat(
                          color: Colors.white,
                          fontWeight: FontWeight.w400,
                          fontSize: 18,
                        ),
                      ),
                    ),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => SignInPage()),
                        );
                      },
                      child: Text(
                        'Sign In',
                        style: GoogleFonts.montserrat(
                          color: Colors.white,
                          fontWeight: FontWeight.w400,
                          fontSize: 18,
                        ),
                      ),
                    ),
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class MyDrawer extends StatefulWidget {
  MyDrawer({Key key}) : super(key: key);
  _MyDrawer createState() => _MyDrawer();
}

class _MyDrawer extends State<MyDrawer> {
  String uid = "";
  @override
  void initState() {
    _getThingsOnStartup().then((value) {
      print('Async done');
    });
    super.initState();
  }

  Future _getThingsOnStartup() async {
    this.uid = await AuthService(FirebaseAuth.instance).inputData();
    print(this.uid);
  }

// class MyDrawer extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Drawer(
      // Add a ListView to the drawer. This ensures the user can scroll
      // through the options in the drawer if there isn't enough vertical
      // space to fit everything.
      child: ListView(
        // Important: Remove any padding from the ListView.
        padding: EdgeInsets.zero,
        children: <Widget>[
          DrawerHeader(
            child: Text(uid),
            decoration: BoxDecoration(
              color: Colors.blue,
            ),
          ),
          ListTile(
            title: Text('iBeacon'),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => MainApp()),
              );
            },
          ),
          ListTile(
            title: Text('Item 2'),
            onTap: () {
              // Update the state of the app.
              // ...
            },
          ),
        ],
      ),
    );
  }
}

class HomeLoggedInPage extends StatefulWidget {
  HomeLoggedInPage({Key key}) : super(key: key);
  _HomeLoggedInPage createState() => _HomeLoggedInPage();
}

class _HomeLoggedInPage extends State<HomeLoggedInPage> {
  String uid = "";
  @override
  void initState() {
    _getThingsOnStartup().then((value) {
      print('Async done');
    });
    super.initState();
  }

  Future _getThingsOnStartup() async {
    this.uid = await AuthService(FirebaseAuth.instance).inputData();
    print(this.uid);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SafeArea(
        child: Scaffold(
          appBar: AppBar(
            title: Text('DashBoard'),
          ),
          drawer: MyDrawer(),
          //  Drawer(
          //   // Add a ListView to the drawer. This ensures the user can scroll
          //   // through the options in the drawer if there isn't enough vertical
          //   // space to fit everything.
          //   child: ListView(
          //     // Important: Remove any padding from the ListView.
          //     padding: EdgeInsets.zero,
          //     children: <Widget>[
          //       DrawerHeader(
          //         child: Text(uid),
          //         decoration: BoxDecoration(
          //           color: Colors.blue,
          //         ),
          //       ),
          //       ListTile(
          //         title: Text('iBeacon'),
          //         onTap: () {
          //           Navigator.push(
          //             context,
          //             MaterialPageRoute(builder: (context) => IBeaconApp()),
          //           );
          //         },
          //       ),
          //       ListTile(
          //         title: Text('Item 2'),
          //         onTap: () {
          //           // Update the state of the app.
          //           // ...
          //         },
          //       ),
          //     ],
          //   ),
          // ),
          backgroundColor: Colors.white,
          body: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Image(
                  image: AssetImage("images/homeImage.png"),
                ),
                Text(
                  "Employee Emergency App",
                  style: GoogleFonts.montserrat(
                    color: Colors.black,
                    fontWeight: FontWeight.w700,
                    fontSize: 36,
                  ),
                  textAlign: TextAlign.center,
                ),
                Text(
                  "In an emergency, you can use it automatically and quickly send out a call for help.",
                  style: GoogleFonts.montserrat(
                    color: Colors.black,
                    fontWeight: FontWeight.w400,
                    fontSize: 18,
                  ),
                  textAlign: TextAlign.center,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    ElevatedButton(
                      onPressed: () {},
                      child: Text(
                        'DashBoard',
                        style: GoogleFonts.montserrat(
                          color: Colors.white,
                          fontWeight: FontWeight.w400,
                          fontSize: 18,
                        ),
                      ),
                    ),
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class IBeacon extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container();
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
          mainAxisAlignment: MainAxisAlignment.spaceAround,
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
                Navigator.pop(context);
              },
              child: Text("SignIn"),
            )
          ],
        ),
      ),
    );
  }
}
