from flask import Flask, render_template, request, redirect, session, jsonify, url_for
from keras.models import load_model
import numpy as np
import pickle
import os
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# Load the trained model
model = load_model('src\server\models\model.h5')
all_symptoms = ['abdominal pain', 'abnormal menstruation', 'acidity', 'acute liver failure', 'altered sensorium', 'anxiety', 'back pain', 'belly pain', 'blackheads', 'bladder discomfort', 'blister', 'blood in sputum', 'bloody stool', 'blurred and distorted vision', 'breathlessness', 'brittle nails', 'bruising', 'burning micturition', 'chest pain', 'chills', 'cold hands and feets', 'coma', 'congestion', 'constipation', 'continuous feel of urine', 'continuous sneezing', 'cough', 'cramps', 'dark urine', 'dehydration', 'depression', 'diarrhoea', 'dischromic  patches', 'distention of abdomen', 'dizziness', 'drying and tingling lips', 'enlarged thyroid', 'excessive hunger', 'extra marital contacts', 'family history', 'fast heart rate', 'fatigue', 'fluid overload', 'fluid overload.1', 'foul smell of urine', 'headache', 'high fever', 'hip joint pain', 'history of alcohol consumption', 'increased appetite', 'indigestion', 'inflammatory nails', 'internal itching', 'irregular sugar level', 'irritability', 'irritation in anus', 'itching', 'joint pain', 'knee pain', 'lack of concentration', 'lethargy', 'loss of appetite', 'loss of balance', 'loss of smell', 'malaise', 'mild fever', 'mood swings', 'movement stiffness', 'mucoid sputum', 'muscle pain', 'muscle wasting', 'muscle weakness', 'nausea', 'neck pain', 'nodal skin eruptions', 'obesity', 'pain behind the eyes', 'pain during bowel movements', 'pain in anal region', 'painful walking', 'palpitations', 'passage of gases', 'patches in throat', 'phlegm', 'polyuria', 'prognosis', 'prominent veins on calf', 'puffy face and eyes', 'pus filled pimples', 'receiving blood transfusion', 'receiving unsterile injections', 'red sore around nose', 'red spots over body', 'redness of eyes', 'restlessness', 'runny nose', 'rusty sputum', 'scurring', 'shivering', 'silver like dusting', 'sinus pressure', 'skin peeling', 'skin rash', 'slurred speech', 'small dents in nails', 'spinning movements', 'spotting  urination', 'stiff neck', 'stomach bleeding', 'stomach pain', 'sunken eyes', 'sweating', 'swelled lymph nodes', 'swelling joints', 'swelling of stomach', 'swollen blood vessels', 'swollen extremeties', 'swollen legs', 'throat irritation', 'toxic look (typhos)', 'ulcers on tongue', 'unsteadiness', 'visual disturbances', 'vomiting', 'watering from eyes', 'weakness in limbs', 'weakness of one body side', 'weight gain', 'weight loss', 'yellow crust ooze', 'yellow urine', 'yellowing of eyes', 'yellowish skin']


@app.route('/predict', methods=['POST', 'GET'])
def predict():
    selected_symptoms = request.get_json()
    disease_name, probability = get_result(selected_symptoms)
    return jsonify({"disease":disease_name, "Probability":probability * 100})



def get_result(selected_symptoms):
    template_array = np.zeros(132)
    for symptom in selected_symptoms:
        try:
            index = all_symptoms.index(symptom)
            template_array[index] = 1
        except ValueError:
            print(f"Warning: {symptom} is not in the list of symptoms.")

    arr = np.array(template_array).reshape(1, 132)
    prediction = model.predict(arr)
    index = np.argmax(prediction)
    
    disease_names = ['(vertigo) Paroymsal  Positional Vertigo', 'AIDS', 'Acne',
       'Alcoholic hepatitis', 'Allergy', 'Arthritis', 'Bronchial Asthma',
       'Cervical spondylosis', 'Chicken pox', 'Chronic cholestasis',
       'Common Cold', 'Dengue', 'Diabetes ', 'Dimorphic hemmorhoids(piles)',
       'Drug Reaction', 'Fungal infection', 'GERD', 'Gastroenteritis',
       'Heart attack', 'Hepatitis B', 'Hepatitis C', 'Hepatitis D',
       'Hepatitis E', 'Hypertension ', 'Hyperthyroidism', 'Hypoglycemia',
       'Hypothyroidism', 'Impetigo', 'Jaundice', 'Malaria', 'Migraine',
       'Osteoarthristis', 'Paralysis (brain hemorrhage)',
       'Peptic ulcer diseae', 'Pneumonia', 'Psoriasis', 'Tuberculosis',
       'Typhoid', 'Urinary tract infection', 'Varicose veins', 'hepatitis A']
    
    disease_name = disease_names[index]
    probability = (np.max(prediction))
    
    return disease_name, probability


if __name__ == '__main__':
    app.run(debug=True)
