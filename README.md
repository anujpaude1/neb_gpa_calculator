# NEB GPA Calculator

This project is a GPA calculator for NEB students studying in grade 11 and 12. It allows students to calculate their GPA based on their marks or GPA for individual subjects.

## Features

- Calculate GPA based on marks or GPA for individual subjects.
- Supports both Science and Management streams.
- Provides detailed GPA calculation for each subject.
- Responsive design for mobile and desktop devices.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/neb_gpa_calculator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd neb_gpa_calculator
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5000`.

## Project Structure

- `src/App.svelte`: Main application component.
- `src/lib/Calculate.svelte`: Component for GPA calculation.
- `src/lib/Stream.svelte`: Component for selecting the stream (Science or Management).
- `src/stores.js`: Svelte store for managing the selected course.
- `src/app.css`: Global CSS styles.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Svelte
- MathJax
- Google Tag Manager
