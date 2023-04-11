// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
const progress = document.querySelector('.progress')
        const percentage = document.querySelector('.progress span')

        let per = 0;
        function progressLoad(){
            if(per>=80){
                progress.style.width = `80%`;
                percentage.innerHTML = "80%"

            }else{
                progress.style.width = `${per}%`;
                percentage.innerHTML = `${per}%`;

            }
            per++

        }

        setInterval(progressLoad,90)
