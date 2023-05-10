import MobileDevicesSVG from '../../assets/svg/mobileDevicesSVG'
import Typography from '../Typography'

function LandingPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 100px',
        height: '100vh',
        minHeight: '900px',
      }}
    >
      <div
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <Typography
          invert
          borders
          color='transparent'
          fontFamily='Archivo Black'
          textTransform='uppercase'
          textStroke='1px #0000001A'
          lineHeight='88%'
          fontSize='128px'
          letterSpacing='-0.07em'
          backdropFilter='blur(2px)'
        >
          Web
          <br />
          dev
          <br />
          eloper
        </Typography>
        <div
          style={{
            position: 'absolute',
            zIndex: '1',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <Typography fontWeight='bold' fontSize='36px'>
            Hello!
          </Typography>
          <Typography fontWeight='bold' fontSize='48px'>
            I&rsquo;m Christian Andrade
          </Typography>
          <Typography
            borders
            borderColor='#464646'
            color='transparent'
            fontFamily='Archivo Black'
            textTransform='uppercase'
            lineHeight='88%'
            fontSize='64px'
            letterSpacing='-0.07em'
            position='absolute'
            top='210px'
            left='50px'
          >
            {'</></></></></>'}
          </Typography>
          <Typography
            fontFamily='Archivo Black'
            textTransform='uppercase'
            color='#FFB95F'
            lineHeight='88%'
            letterSpacing='-0.07em'
            fontSize='128px'
          >
            Web
            <br /> dev
            <br />
            eloper
          </Typography>
        </div>
        <Typography
          invert
          borders
          color='transparent'
          fontFamily='Archivo Black'
          textTransform='uppercase'
          textStroke='1px #0000001A'
          lineHeight='88%'
          fontSize='128px'
          letterSpacing='-0.07em'
          backdropFilter='blur(2px)'
        >
          Web
          <br />
          dev
          <br />
          eloper
        </Typography>
      </div>
      <div
        style={{
          width: '50%',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10%',
            zIndex: '1',
            right: 0,
          }}
        >
          <MobileDevicesSVG />
        </div>
        <div
          style={{
            display: 'grid',
            placeContent: 'center',
            width: '600px',
            height: '200px',
            position: 'absolute',
            top: '63%',
            right: '50px',
            background:
              'linear-gradient(90deg, #A7DDF0 -14.03%, rgba(157, 224, 253, 0.51) 46.91%, rgba(217, 217, 217, 0) 85.97%)',
          }}
        >
          <Typography
            textTransform='uppercase'
            textAlign='center'
            fontSize='32px'
            fontWeight={600}
          >
            Turning ideas intro digital <br />
            reality {'{・・・}'}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
