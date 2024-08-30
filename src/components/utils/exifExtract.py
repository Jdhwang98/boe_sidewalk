
"""
NOTICE!!
- This script requires an IMAGE folder and a CSV folder
- These two folders should exist within the same relative path
    as this script
- This scipt extracts data from both folders
"""
import exifread
# from matplotlib import pyplot as plt
import datetime as datetime
import os
import csv

script_dir = os.path.dirname(os.path.abspath(__file__))

# Specify the image and csv folders
imgFolder = os.path.join(script_dir, 'sampleImgs')
csvFolder = os.path.join(script_dir, 'sampleCsv')

# Create a folder for storing merged data if it doesn't exist
outputFolder = os.path.join(script_dir, 'output')
os.makedirs(outputFolder, exist_ok=True)

imageData = []

# match images with the sidewalk data
def matchCSV():
    collectImages(imgFolder)

    # Iterate through all csv files in the folder
    for file_name in os.listdir(csvFolder):
        csvData = []
        # Check if the file is a CSV file
        if file_name.endswith('.csv'):
            # Construct the full file path
            file_path = os.path.join(csvFolder, file_name)
            
        # Open the CSV file in read mode
        with open(file_path, mode='r') as file:
            # Create a CSV reader object
            csv_reader = csv.reader(file)
                
            # Iterate over each row in the CSV file
            for row in csv_reader:
                # Each row is a list of values
                # You can access individual values using indexing
                csvData.append(row)
                
        # call match() function
        for result in match(csvData, file_name):
            print(result)


def toDegree(data):
        l = list((str(data).replace('[', '')).replace(']', '').split(','))
        s = l[2].split('/')
        return float(l[0]) + (1/60)*float(l[1]) + (float(s[0])/float(s[1]))*(1/(60*60))

# extracts img metadata and store to imgData array
def readEXIF(imagefile):
        # open image file for reading (binary mode)
        f = open('C:/GITHUB/2023-2024-boe-sidewalk-updated/src/components/utils/' + imagefile, 'rb')
        tags = exifread.process_file(f)
        # print(tags.keys())
        name = tags.get('Image ImageDescription').__str__().split("\\")[-1]
        latref = tags.get('GPS GPSLatitudeRef')
        lat = toDegree(tags.get('GPS GPSLatitude'))
        lonref = tags.get('GPS GPSLongitudeRef')
        lon = -toDegree(tags.get('GPS GPSLongitude'))
        imake = tags.get('Image Make')
        imageTime = datetime.datetime.strptime(str(tags.get('Image DateTime')), '%Y:%m:%d %H:%M:%S')
        # print('Latitude:', latref, lat, ' Longitude:', lonref, lon)
        imgEntry = {'name': name,'lat': lat, 'lon':lon}
        # print(name)

        # add the extracted data into an array
        imageData.append(imgEntry)
        # print('Date-Time of Image:', imageTime)
        # print('GPS GPSLatitude', tags.get('GPS GPSLatitude'))
        # print('GPS GPSLongitude', tags.get('GPS GPSLongitude'))


# looping through all images from the img folder
def collectImages(imageFolder):
    for image in os.listdir(imageFolder):
        if image.endswith((".png", ".jpg", ".jpeg", ".JPG")):
            readEXIF('sampleImgs/'+image)


# uses brute force to compare current csv data and image data
def match(swData, file_name):
        result = []
        # looping csv rows
        for sData in swData:
            # initialize minimum
            minimum = {"imgName": 'n/a', "latDiff": 999, "lonDiff": 999}

            # looping images
            for iData in imageData:
                # calculate coordinate difference
                # between csv and image
                latDiff = abs(iData['lat']-float(sData[1]))
                lonDiff = abs(iData['lon']-float(sData[2]))

                # if lat and lon difference are smaller than current minimum,
                # become the new minimum
                if (latDiff < minimum["latDiff"]) and (lonDiff < minimum["lonDiff"]):
                    minimum = {"imgName": iData['name'], "latDiff":latDiff, "lonDiff":lonDiff}

            # creating a row entry
            # combines desired sidewalk data and the image name
            # [SectionID, X-slope, Y-slope, Latitude, Longitude, ImgName]
            row = [sData[0], sData[3], sData[4], sData[1], sData[2],minimum['imgName']]

            # add to result
            result.append(row)


        newFilename = "extracted_"+file_name
        # Writing combined data to the new CSV file
        with open(os.path.join(outputFolder, newFilename), 'w', newline='') as file:
            writer = csv.writer(file)
            writer.writerows(result)
        return result



matchCSV()