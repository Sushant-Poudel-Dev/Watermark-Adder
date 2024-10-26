# Watermark Adder

This is a simple web application that allows users to add a watermark text to an image. The application is built using HTML, CSS, and JavaScript.

## Features

- Upload an image from your local device.
- Add a custom watermark text to the image.
- Display the watermarked image directly in the browser.

## Getting Started

To get started with this project, clone the repository and open the `index.html` file in your browser.

### Prerequisites

You’ll need a modern web browser to run this app. No other dependencies are required.

## Usage

1. Clone or download this repository.
2. Open the `index.html` file in your browser.
3. Select an image by clicking on "Select an Image."
4. Enter the watermark text in the "Enter Watermark Text" field.
5. Click "Add Watermark" to add the watermark text to the image.
6. The watermarked image will appear below the form.

## Code Overview

- **HTML**: Contains the basic structure of the page, including file input and text input fields, and a button to add the watermark.
- **JavaScript** (`script.js`): Handles image processing using the HTML5 Canvas API, allowing text to be overlaid on the uploaded image.
  - `addWatermark()`: Reads the uploaded image, applies the specified watermark text, and displays the watermarked image.
- **CSS** (`style.css`): Add custom styles as needed to enhance the page design.
