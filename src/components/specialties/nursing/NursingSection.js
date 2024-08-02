import React from 'react'
import './NursingSection.css'
import Man from '../../../assets/specialties_section_male_nurse.webp'

const NursingSection = () => {
  return (
<>


<div className='nursingSection'>
      <div className="nursingSectionHeader container">
        <h1>Nursing Placement Services</h1>
        <p>At Witty Personnel, we understand the critical role that nurses play in delivering high-quality patient care. Our Nurse Placement Services are designed to provide healthcare facilities with highly skilled and compassionate nursing professionals who excel in diverse medical settings.</p><br/>
      </div>

      <div className='nursingSectionFlex container'>
        <div className='nursingSectionLeft'>
            <h1>Tailored Nurse Staffing Solutions:</h1>
            <p>We offer customized nurse staffing solutions to meet the unique needs of each healthcare facility. Whether you require temporary nurses for short-term assignments, permanent placements for long-term stability.</p>
            <h1>Rigorous Selection Process:</h1>
            <p>Our comprehensive vetting process ensures that every nurse we place meets the highest standards of competence and professionalism. We thoroughly assess each candidate’s qualifications, experience, and dedication to patient care, ensuring they are a perfect fit for your facility.</p>

            <h1>Wide Range of Specialties:</h1>
            <p>We provide nurses across a broad spectrum of specialties, including but not limited to:</p>
            <p>
              <ul>
                <li>Registered Nurses (RNs)</li>
                <li>Licensed Vocational Nurses (LVNs)</li>
                <li>Nurse Practitioners (NPs)</li>
              </ul>
            </p>

        </div>

        <div className='nursingSectionRight gradient-border'>
          <img src={Man} alt='Smiling Man' loading='lazy'/>
        </div>
      </div>





<div className="nurseSectionFooter container">
                <h1>Support and Retention</h1>
                <p>Our commitment to excellence extends beyond placement. We provide ongoing support to our nurses and partner facilities to ensure a smooth transition and long-term satisfaction. Our retention programs are designed to keep our nurses motivated and engaged, promoting a stable and reliable workforce.</p>

                <h1>Why Choose Witty Personnel?</h1>
                <ul>
                  <li>Expertise: Our team has extensive experience in healthcare staffing, providing insight and guidance to meet your specific needs.
                  </li>
                  <li>Quality: We prioritize quality in every placement, ensuring that our nurses deliver exceptional care.</li>
                  <li>Flexibility: Our flexible staffing solutions adapt to the changing demands of healthcare environments.</li>
                  <li>Partnership: We build lasting relationships with our clients, working collaboratively to achieve the best outcomes.</li>
                </ul>

                <br />
                <p>Partner with Witty Personnel for all your nurse staffing needs and experience the difference that quality, dedication, and expertise can make. Let us help you provide the best care for your patients with our exceptional nursing professionals.</p>
</div>

</div>


    </>
  )
}

export default NursingSection
