import 'package:flutter/material.dart';
import 'package:snippet_coder_utils/FormHelper.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  static final GlobalKey<FormState> globalKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Meeting App"),
        backgroundColor: Colors.redAccent,
      ),
      body: Form(
        key: globalKey,
        child: formUI()
        )
    );
  }
}


formUI(BuildContext context)
{
  return Center(
    child: Padding(
      padding: const EdgeInsets.all(20.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text(
            "Welcome to webRTC Meeting App",
            textAlign: TextAlign.center,
            style:TextStyle(
              color: Colors.black,
              fontSize: 25,
            ),
          ),
          SizedBox(
            height:20,
          ),
          FormHelper.inputFieldWidget(
            context,
            "meetingId",
            "Enter your meeting Id",
            (val){
              if (val.isEmpty)
              {
                return "Meeting Id can't be empty";
              }
              return null;
            },
            (onSaved){
              meetingId = onSaved;
            },
            borderRadius: 10,
            borderFocusColor: Colors.redAccent,
            borderColor: Colors.red,
            hintColor: Colors.grey,
          ),
          SizedBox(height: 20)
        ]
      ),),
  );
}