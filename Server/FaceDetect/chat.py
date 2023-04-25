


# import cv2
# import numpy as np
# import tensorflow as tf
# from tensorflow import keras

# # Define the image size and number of classes
# img_size = 224
# num_classes = 3

# # Define the class names
# class_names = {0: "karan balkrishna patil", 1: "shriyash ravi patil", 2: "tushar prakash jadhav",3: "Unknown" }

# # Load the model
# model_path = "C:/Users/91976/OneDrive/Desktop/ExpOnMajor/dnj/Server/FaceDetect/Face.h5"
# model = keras.models.load_model(model_path)

# # Define a function to predict the user from an image

# ##SECOND
# def predict_user(image_path):
#     # Load the image and preprocess it
#     image = cv2.imread(image_path)
#     image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
#     image = cv2.resize(image, (img_size, img_size))
#     image = np.expand_dims(image, axis=0)
#     image = image / 255.0

#     # Make the prediction
#     prediction = model.predict(image , verbose = 0)
#     label = np.argmax(prediction)
    
#     # Check if the predicted label is 3 (Unknown)
#     if label == 3:
#         predicted_user = class_names[label]
#         #probability = prediction[0][label]
#     else:
#         predicted_user = class_names[label]
#         #probability = prediction[0][label]
#         print(f"{predicted_user} ")
    
    

#     # Print the label and prediction
#     predicted_user = class_names[label]
#     #print(f"The image is most likely of {predicted_user} with a probability of {prediction[0][label]}")

#     return predicted_user 

# #prediction[0][label]

# # Define a function to verify the user image and return the predicted user and probability
# def verify_image(image_path):
#     predicted_user, probability = predict_user(image_path)
#     return predicted_user, probability

# # Call the verify_image function with an image path to get the predicted user and probability
# image_path = "C:/Users/91976/OneDrive/Desktop/ExpOnMajor/dnj/Server/images/image.jpg"
# #image_path = "C:/Users/91976/OneDrive/Desktop/ExpOnMajor/dnj/Server/uploads/IMG_20230223_115044.jpg"
# predicted_user, probability = verify_image(image_path)
# #print(f"The predicted user is {predicted_user} with a probability of {probability}")
# print(f"{predicted_user}")

import cv2
import numpy as np
import tensorflow as tf
from tensorflow import keras

# Define the image size and number of classes
img_size = 224
num_classes = 3

# Define the class names
class_names = {0: "karan balkrishna patil", 1: "shriyash ravi patil", 2: "tushar prakash jadhav",3: "Unknown" }

# Load the model
model_path = "C:/Users/91976/OneDrive/Desktop/logoutPr/dnj2/Server/FaceDetect/Face.h5"
model = keras.models.load_model(model_path)

# Define a function to predict the user from an image

##SECOND
def predict_user(image_path):
    # Load the image and preprocess it
    image = cv2.imread(image_path)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = cv2.resize(image, (img_size, img_size))
    image = np.expand_dims(image, axis=0)
    image = image / 255.0

    # Make the prediction
    prediction = model.predict(image , verbose = 0)
    label = np.argmax(prediction)
    
    # Check if the predicted label is 3 (Unknown)
    if label == 3:
        predicted_user = class_names[label]
        #probability = prediction[0][label]
    else:
        predicted_user = class_names[label]
        #probability = prediction[0][label]
        #print(f"{predicted_user} ")
    
    

    # Print the label and prediction
    predicted_user = class_names[label]
    #print(f"The image is most likely of {predicted_user} with a probability of {prediction[0][label]}")

    return predicted_user 
   # Return the predicted user as a JSON object
    #return {'predicted_user': predicted_user}

#prediction[0][label]

# Define a function to verify the user image and return the predicted user and probability
def verify_image(image_path):
    predicted_user= predict_user(image_path)
    return predicted_user

# Call the verify_image function with an image path to get the predicted user and probability
image_path = "C:/Users/91976/OneDrive/Desktop/logoutPr/dnj2/Server/images/image.jpg"
#image_path = "C:/Users/91976/OneDrive/Desktop/ExpOnMajor/dnj/Server/uploads/IMG_20230223_115044.jpg"
predicted_user = verify_image(image_path)
#print(f"The predicted user is {predicted_user} with a probability of {probability}")
print(f"{predicted_user}")