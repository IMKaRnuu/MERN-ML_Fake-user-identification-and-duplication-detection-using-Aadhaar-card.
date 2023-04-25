# from keras.preprocessing.image import ImageDataGenerator

# train_datagen = ImageDataGenerator(
#     rescale=1./255,
#     rotation_range=10,
#     width_shift_range=0.1,
#     height_shift_range=0.1,
#     shear_range=0.1,
#     zoom_range=0.1,
#     horizontal_flip=True,
#     fill_mode='nearest')

# train_generator = train_datagen.flow_from_directory(
#     directory='D:\Major_project\FR1\database',
#     target_size=(224, 224),
#     batch_size=32,
#     class_mode='categorical')
import cv2
import numpy as np
import os
import tensorflow as tf
from tensorflow import keras
import scipy
from tensorflow.keras import layers, Model
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Define the data directory and the face cascade classifier
data_dir = "database"
face_cascade = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")

# Define the image size and number of classes
img_size = 224
num_classes = len(os.listdir(data_dir))

# Define the image data generator for data augmentation
datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=10,
    width_shift_range=0.1,
    height_shift_range=0.1,
    shear_range=0.1,
    zoom_range=0.1,
    horizontal_flip=True,
    fill_mode='nearest')

# Define the training data generator
train_generator = datagen.flow_from_directory(
    directory=data_dir,
    target_size=(img_size, img_size),
    batch_size=32,
    class_mode='categorical')

# Define the pre-trained model for transfer learning
base_model = keras.applications.VGG16(weights='imagenet', include_top=False, input_shape=(img_size, img_size, 3))
x = base_model.output
x = layers.GlobalAveragePooling2D()(x)
x = layers.Dense(256, activation='relu')(x)
x = layers.Dropout(0.5)(x)
predictions = layers.Dense(num_classes, activation='softmax')(x)
model = Model(inputs=base_model.input, outputs=predictions)

# Freeze the weights of the pre-trained model
for layer in base_model.layers:
    layer.trainable = False

# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(train_generator, epochs=10)
model.save("database/face_recognition_model.h5")
