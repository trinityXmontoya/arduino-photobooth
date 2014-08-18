//#include <nRF24L01.h>
//#include <RF24.h>
//#include <RF24_config.h>
#include <Servo.h>

Servo myServo;
int switchState = 0;

void setup(){
  myServo.attach(7);
  myServo.write(0);
  Serial.begin(9600);
  pinMode(2,INPUT);

};

void loop(){
  switchState = digitalRead(2);
  Serial.print("SWITCH STATE:");
  Serial.println(switchState);
  if(switchState == HIGH){
    Serial.println("PRESSED!");
    triggerCameraPress();
  };
};

void triggerCameraPress(){
  Serial.print("Pressed!");
  // wait 5 seconds from when button is pressed
  delay(5000);
  // bring servo to 45 degree angle to trigger camera shutter
  myServo.write(45);
  delay(500);
  // move back to start position
  myServo.write(1);
};
