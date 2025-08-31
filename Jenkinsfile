pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/31RahulPatel/Jenkins-first-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the app (simulation)...'
            }
        }
    }
}
