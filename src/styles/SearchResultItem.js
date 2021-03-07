import styled from "styled-components"

export default styled.div`

.card {
  display: flex;
}

.card-content {
  display: flex;
  flex-direction: row;
}

.content-description-rigth {
  background-color: white;
  display: flex;
  flex-direction: column;
  width:220px;
  justify-content: left;
}

.bottom-description {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  margin-right: auto; 
  margin-left: 0;
}

.title-text {
  color: black;
  font-weight: bold;
}

.author-text {
  font-weight: bold;
  color: #616161;
}

.date-text {
  color: #FBA13E;
}


/* Smaller phone viewpoints */
@media only screen and (min-width: 320px) {

  .card {
    height: 120px;
  }

  .title-text {
    font-size: 12px;
  }
  
  .author-text {
    font-size: 8px;
  }
  
  .date-text {
    font-size: 12px;
  }

  .content-description-rigth {
    width:130px;
  }

  .image-card-left {
    width: 120px;
    height: 120px;
  }

}

/* Small devices and most phones */
@media only screen and (min-width: 360px) {

  .card {
    height: 140px;
  }

  .title-text {
    font-size: 14px;
  }
  
  .author-text {
    font-size: 8px;
  }
  
  .date-text {
    font-size: 12px;
  }

  .content-description-rigth {
    width:140px;
  }

  .image-card-left {
    width: 140px;
    height: 140px;
  }

}

/* Most tablets*/
@media only screen and (min-width: 768px) {

  .card {
    height: 160px;
  }

  .content-description-rigth {
    width:220px;
  }
  
  .image-card-left {
    width: 160px;
    height: 160px;
  }
  
  .title-text {
    font-size: 17px;
  }
  
  .author-text {
    font-size: 10px;
  }
  
  .date-text {
    font-size: 15px;
  }

}

/* Smaller desktop viewpoints */
@media only screen and (min-width: 992px) {

  .card {
    height: 160px;
  }
  .content-description-rigth {
    width:220px;
  }
  
  .image-card-left {
    width: 160px;
    height: 160px;
  }

  .title-text {
    font-size: 18px;
  }
  
  .author-text {
    font-size: 11px;
  }
  
  .date-text {
    font-size: 16px;
  }

}

/* Large devices and wide screens */
@media only screen and (min-width: 1200px) {

  .card {
    height: 180px;
  }
  .content-description-rigth {
    width:240px;
  }
  
  .image-card-left {
    width: 180px;
    height: 180px;
  }

  .title-text {
    font-size: 20px;
  }
  
  .author-text {
    font-size: 13px;
  }
  
  .date-text {
    font-size: 18px;
  }

}

`