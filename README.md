# MERN+ML_Aadhar-based-user-enrollement-system



https://user-images.githubusercontent.com/91008644/234259030-8cc84e66-0ace-4cc4-8130-f55992367f91.mp4





# Introduction
In COVID-19 pandemic, most educational institutions have shifted their processes online. Considering the current senario as well still 30% - 40% of the universites , college and organization are working online. However, this has resulted in a rise of fake enrollments and duplication of student details, which is a major concern for universities and colleges. We have implemented a system that uses advanced technologies such as Convolutional Neural Networks (CNN) and OpenCV to validate a student's identity based on their Aadhaar card photo. Our project involves a four-stage verification process that includes Aadhaar detail verification, mobile number verification via OTP sent to the examinee's Aadhaar-registered mobile number, face verification, and user profile showcasing.
To implement this project, we used MERN Stack, which stands for MongoDb, Express, React, and Node. This technology provided a robust and scalable framework for our project, and we utilized React to develop a user-friendly interface with good functionality. 

# Promblem Statement
Many students are admitted into colleges each year. Nearly all of the process had been shifted online due to the continuing COVID problem. Considering the current situtation as well nearly 30% to 40 % of the universities and organizations are working in online mode. The Form filling procedure for exams, online courses, or other similar reasons was observed to be frequently done by users or students using fictitious enrollment information. Furthermore, a lot of students engage in online misconduct and deception which disrupts the entire class. The same thing occurs with online tests and Google Forms. It is easy to create a fake Gmail ID, leading to false submissions that make it difficult for instructors to evaluate genuine responses.

# Proposed System
* In  our  project , We have implement a system which will prevent fake enrollment  of the students .
* The Aadhar details of the students will be checked in our implemented system and if they matched then the student will be authenticated or validated.
* This includes Aadhar based Face identification which will validate a student details before Student proceed for a online educational activity such online classes or online exams.

# System Architecture
![image](https://user-images.githubusercontent.com/91008644/234255916-0fc62a43-310b-4a6b-a1a5-17f41eb2d182.png)
# Work Flow
![image](https://user-images.githubusercontent.com/91008644/234256083-03a37fa8-a26a-4b22-bb14-cff37c10035b.png)

# Methodoloy
### MERN Stack
Our project utilizes the power of MERN Stack, which stands for MongoDB, Express, React, and Node. MERN Stack is the backbone of our project and provides a comprehensive set of tools and technologies that make our system more efficient, secure, and future-proof.
React.js, one of the components of the MERN stack, is responsible for providing a beautiful user interface and smooth functionality to our project. Express.js and Node.js framework handle the connectivity and authentication, along with API integration, making our project more secure and reliable.
To ensure seamless data management, we have chosen MongoDB, one of the most in-demand NoSQL databases. With the help of MERN stack, we have built a system that is efficient, robust, and well-equipped to handle the challenges of the modern world.
### CNN (Convolutional Neural Networks)
The CNN is defined using the Keras API and the pre-trained VGG16 model is used for transfer learning. The VGG16 model is a deep neural network with 16 layers that has been pre-trained on the ImageNet dataset. The last layer of the VGG16 model is removed and two new layers are added on top of it to adapt the model for the new face verification task. The new layers consist of a global average pooling layer, a dense layer with 256 units and a ReLU activation function, a dropout layer with a rate of 0.5, and a dense output layer with a softmax activation function. The model is then compiled with an optimizer of Adam, a categorical cross-entropy loss function, and accuracy as the metric to optimize.
### OpenCV (Open Source Computer Vision Library)
OpenCV is used to detect faces in the images. The Haar Cascade Classifier, specifically the "haarcascade_frontalface_default.xml" file, is used for face detection. The classifier detects the presence of a face in the image and returns the coordinates of the face region. Once the face region is obtained, it is cropped and resized to the required size of 224x224 pixels before being fed into the CNN for face verification.

# Conclusion
We have implemented a system which will prevent fake enrollment and authenticate student details using their Aadhaar card details like Aadhaar UID, name, phone numbers and face verification. By implementing our proposed work, the chances of misbehavior and cheating in online examinations will be significantly reduced. The use of advanced ML algorithms and the MERN stack have been instrumental in achieving this high level of authentication and security. Result of this will lead a genuine student to attend the exam.

# Future Scope
* Integration with other biometric authentication systems: Consider adding support for other biometric authentication methods, such as fingerprint or iris recognition, to increase the security and accuracy of the authentication process.
* Multi-factor authentication: Implement multi-factor authentication by using two or more authentication methods, such as a combination of password and biometric authentication, to provide even greater security.
* Mobile application: Develop a mobile application for the project to make it more accessible and convenient for users to authenticate themselves from their mobile devices.

# Contribution
### BE STUDENTS
* KARAN PATIL
* SHRIYASH PATIL
* TUSHAR JADHAV
* EMAIL:- karanpatil6338@gmail.com



 

