pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'cd coffee-shop && npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'cd coffee-shop && npm test -- --coverage --watchAll=false'
            }
        }

        stage('Build') {
            steps {
                sh 'cd coffee-shop && npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying coffee webapp...'
                sh 'cd coffee-shop && ls -la build/'
            }
        }
    }
}