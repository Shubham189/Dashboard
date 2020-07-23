// Palette
import palette from 'theme/palette';

var color=[];
colourRandom();
// Chart data
export const data = {
  datasets: [
    {
      data: [444876, 231729, 39247, 31322],
      backgroundColor:  color ,
      borderWidth: 8,
      borderColor: palette.common.white,
      hoverBorderColor: palette.common.white
    }
  ],
  labels: ['Open & No Arrest-Unspecified', 'Cleared-Arrest & Arrest-Unspecified', 'Cleared/Closed-Unspecified', 'Cleared-Ex']
};



// Chart options
export const options = {
  legend: {
    display: true
  },
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  cutoutPercentage: 80,
  layout: { padding: 0 },
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.common.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  }
};

function colourRandom()
{
  for(var i=0;i<4;i++)
  {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    color.push(c);
  }
}

