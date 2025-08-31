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
                echo 'Deploying coffee webapp to EC2...'
                sh 'cd coffee-shop && ls -la build/'
                sh 'sudo cp -r coffee-shop/build/* /var/www/html/ || echo "Manual deployment needed"'
                sh 'sudo systemctl restart apache2 || sudo systemctl restart nginx || echo "Web server restart needed"'
            }
        }
    }
}