import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
   
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Meenakshi B Soni',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS , Kasturba Medical College , 2014',
        experience: '11 Years',
        about: 'Dr. Meenakshi B Soni is a trusted General Physician in Karol Bagh, Delhi. She has helped numerous patients in her 11 years of experience as a General Physician. She is a qualified MBBS . You can consult Dr. Meenakshi B Soni at Dr. Meenakshi B Soni Clinic in Karol Bagh, Delhi. Book an appointment online with Dr. Meenakshi B Soni on Lybrate.com. Lybrate.com has an excellent community of General Physicians in India. You will find General Physicians with more than 38 years of experience on Lybrate.com. We will help you find the best General Physicians online in Delhi. View the profile of medical specialists and their reviews from other patients to make an informed decision.',
        fees: 1000,
        address: {
            line1: '15A/6 WEA, Karol Bagh',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Parinita',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'DNB (Obstetrics & Gynecology), MD - Obstetrtics & Gynaecology, MBBS Delhi',
        experience: '3 Years',
        about: 'Dr. Parinita is an experienced Gynaecologist in Madhu Vihar, Delhi. He has helped numerous patients in his 36 years of experience as a Gynaecologist. He has done DNB (Obstetrics & Gynecology), MD - Obstetrtics & Gynaecology, MBBS . You can visit him at Astha Gynae Clinic in Madhu Vihar, Delhi. He has earned excellent reviews by 11 patients. You can book an instant appointment online with Dr. Parinita on Lybrate.com.',
        fees: 700,
        address: {
            line1: 'C-18, Sai Chowk, Madhu Vihar',
            line2: 'Patparganj, Landmark : Near IP Extension'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Latika Arya',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS , Lady Hardinge Medical College, New Delhi , 1993 MD - Dermatology , Lady Hardinge Medical College, New Delhi , 1997',
        experience: '32 Years',
        about: 'Dr. Latika Arya is a renowned dermatologist who specialises in dermatology and cosmetology with a successful career spanning over 23 years. She is also a laser specialist who did her MBBS from Lady Hardinge Medical College, New Delhi. Her MD in dermatology is also from the Lady Hardinge Medical College. Dr. Latika Arya is currently the secretary of Joint Women?s Dermatologic Society and the Indian Women?s Dermatologic Society. She is a member of the International Society of Dermatology, Indian Association of Dermatologists Venereologists and Leprologists (IADVL), Indian Women`s Dermatology Society, Cosmetic Dermatology Society of India (CDSI), Pigmentary Disorders Society, Member Cutaneous Surgeons of India, Indian Association of Dermatologists and Dermatopathology Society of India. Dr. Latika Arya has had over 23 years of experience. Currently she practices in Skin & Aesthetic Clinic in Defence Colony in Delhi were she has been working for the past 16 years. She specialises in laser, aesthetic and anti-ageing treatment procedures that help her deal with all kinds of skins with the dexterity of a hardened professional. When treating her patients and their skin she insists on a holistic approach that include changing their food habits, sleep patterns, quitting smoking and a balanced lifestyle.',
        fees: 4000,
        address: {
            line1: 'C - 545, Defence Colony',
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Dhiren Gupta',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MD - Paediatrics , Gajara Raja Medical College , 1997 MBBS , Gajara Raja Medical College , 1982',
        experience: '43 Years',
        about: 'Dr. Dhiren Gupta is a popular Pediatrician in Rajender Nagar, Delhi. He has been a practicing Pediatrician for 34 years. He studied and completed MD - Paediatrics, MBBS. You can visit him at Sir Ganga Ram Hospital in Rajender Nagar, Delhi. Don?t wait in a queue, book an instant appointment online with Dr. Dhiren Gupta on Lybrate.com. Lybrate.com has a nexus of the most experienced Pediatricians in India. You will find Pediatricians with more than 31 years of experience on Lybrate.com. Find the best Pediatricians online in Delhi. View the profile of medical specialists and their reviews from other patients to make an informed decision.',
        fees: 1500,
        address: {
            line1: 'Rajinder Nagar',
            line2: 'India'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Neeraj Kumar',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS , GSVM Medical College, Kanpur , 2001 MD- Medicine , GSVM Medical College, Kanpur , 2008 DM- Neurology , DR RML Hospital, New Delhi , 2014',
        experience: '24 Years',
        about: 'He has helped numerous patients in his 24 years of experience as a Neurologist. He is a qualified MBBS, MD- Medicine, DM- Neurology . Book an appointment online with Dr. Neeraj Kumar on Lybrate.com. Lybrate.com has an excellent community of Neurologists in India. You will find Neurologists with more than 41 years of experience on Lybrate.com. Find the best Neurologists online in new delhi. View the profile of medical specialists and their reviews from other patients to make an informed decision.',
        fees: 1800,
        address: {
            line1: 'Shop 2 , LSC , B1 Vasant kunj',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. P Chandra Shekar',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS , Kakatiya Medical College, Wrangal , 2009 DM - Neurology , Gandhi Medical College, Hyderabad , 2017MD - General Medicine , Gandhi Medical College, Hyderabad , 2014',
        experience: '16 Years',
        about: 'Dr. P Chandra Shekar is one of the best Neurologists in Nacharam, Hyderabad. He has been a practicing Neurologist for 16 years. He studied and completed MBBS, DM - Neurology, MD - General Medicine . He is currently associated with S S Neuro Care Centre in Nacharam, Hyderabad. You can book an instant appointment online with Dr. P Chandra Shekar on Lybrate.com.',
        fees: 1100,
        address: {
            line1: 'Plot No. 83, Street No.1, HMT Nagar, Nacharan',
            line2: 'Opposite Bapuji Hospital, Landmark: Opposite Bapuji Hospital'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Hitesh Anand',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS , kasturba medical college manipal , 2013',
        experience: '12 Years',
        about: 'He has been a practicing General Physician for 4 years. He studied and completed MBBS. Save your time and book an appointment online with Dr. Hitesh Anand on Lybrate.com. Find numerous General Physicians in India from the comfort of your home on Lybrate.com. You will find General Physicians with more than 32 years of experience on Lybrate.com. Find the best General Physicians online in delhi. View the profile of medical specialists and their reviews from other patients to make an informed decision.',
        fees: 500,
        address: {
            line1: 'house no 118/4 shivam house sudarshan raod gautam nagar',
            line2: 'new delhi, India'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Urvashi Jha',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MD - Obstetrtics & Gynaecology , Lady Hardinge Medical College, New Delhi , 1980 FRCOG (LONDON) (Fellow of Royal College of Obstetricians and Gynaecologists) , Royal College of Obstetricians and Gynaecologists, London , 1987 MBBS , Lady Hardinge Medical College, New Delhi, , 1975',
        experience: '50 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 300,
        address: {
            line1: 'E-24, Ring Road, Block E',
            line2: 'Defence Colony, Landmark: Near Amity Institute Defence Colony'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Pankaj Chaturvedi',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MD , All India Institute of Medical Sciences, New Delhi , 2009 MBBS , Motilal Nehru Medical College , 2005',
        experience: '20 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'A1/304, Safdarjung Enclave',
            line2: 'A1/304, Safdarjung Enclave'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Rajeev Seth',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS , All India Institute of Medical Sciences, New Delhi , 1983 MD - Pediatrics , All India Institute of Medical Sciences, New Delhi , 1987 DNB - Paediatrics , Diploma National Board , 1987 Diplomate of American Board of Pediatrics(American Board of Pediatrics , University of California San Francisco - UCSF, USA , 1993 Fellow of American Academy of Pediatrics , American Academy Of Pediatrics , 1994',
        experience: '42 Years',
        about: 'Dr. Rajeev Seth is a trusted Pediatrician in New Delhi, Delhi. He has helped numerous patients in his 42 years of experience as a Pediatrician. He is a qualified MBBS, MD - Pediatrics, DNB - Paediatrics, Diplomate of American Board of Pediatrics(American Board of Pediatrics, Fellow of American Academy of Pediatrics . You can consult Dr. Rajeev Seth at The Child Health & Development Center in New Delhi, Delhi. Book an appointment online with Dr. Rajeev Seth on Lybrate.com. Lybrate.com has a number of highly qualified Pediatricians in India. You will find Pediatricians with more than 43 years of experience on Lybrate.com. You can find Pediatricians online in Delhi and from across India. View the profile of medical specialists and their reviews from other patients to make an informed decision.',
        fees: 2500,
        address: {
            line1: 'E-10, Green park Main',
            line2: 'India'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Purushottam Vashistha',
        image: doc11,
        speciality: 'Gastroenterologist',
        degree: 'MD , G R Medical college , 2001 DM - Gastroenterology , BHU Varanasi , 2007BBS',
        experience: '24 Years',
        about: 'He has helped numerous patients in his 24 years of experience as a Gastroenterologist. He is a qualified MD, DM - Gastroenterology . You can book an instant appointment online with Dr. Purushottam Vashistha on Lybrate.com.',
        address: {
            line1: 'Upasani superspeciality Hopsital',
            line2: 'Mumbai, India'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Satish Wagh',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'DM - Neurology , Jawaharlal Institute Of Postgraduate Medical Education & Research (JIPMER), Puducherry , 2018 MD - General Medicine , Medical College, Baroda , 2012 MBBS , Terna College & Hospital, Navi Mumbai , 2007',
        experience: '18 Years',
        about: 'To provide my patients with the highest quality healthcare, I`m dedicated to the newest advancements and keep up-to-date with the latest health care technologies.',
        fees: 1500,
        address: {
            line1: 'Jyothi avenue, Shop No. 3, Sher-E-Punjab colony',
            line2: 'Mumbai, India'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Rajesh Kumar Meena',
        image: doc13,
        speciality: 'General physician',
        degree: 'MD - Consultant Physician , JLN Medical College Ajmer , 2005 Senior Resident-Emergency Medicine , AIIMS New Delhi , 2009',
        experience: '20 Years',
        about: 'Dr. Rajesh K Meena has more than 12 years of experience in the various domains of internal medicine. After completing post-graduation in medicine from JLN Medical College, Ajmer, he trained in Emergency Medicine at the reputed All India Institute of Medical Sciences (AIIMS), New Delhi. He has attended various national and international conferences and has been awarded a gold medal for best presentation at one such conference. He is a medical expert in infectious diseases, immunology, allergic disorders, emergency medicine, geriatric medicine, diabetes treatment, hypertension treatment, preventive medicine and adult immunization His completed his MD (General Medicine) from JLN Medical College, Ajmer, India in 2005 & MBBS from SMS Medical College, Jaipur, India in 2000. ',
        fees: 2500,
        address: {
            line1: 'Lajpat Nagar, Landmark: Near Moolchand Metro Station',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Pranay Ghosh',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '19 Years',
        about: 'MBBS , Maulana Azad Medical College, New Delhi, , 2006 MS - Obstetrics and Gynaecology , Maulana Azad Medical College, New Delhi, , 2010 Diploma in Minimal Access Surgery , World Association of Laparoscopic Surgeons (WALS), , 2010 M.Med.Sci (ART) , University of Nottingham, United Kingdom, , 2012 Specialist Training in Reproductive Medicine , National University Hospital, Singapore, , 2013 Fellowship in Minimal Access Surgery , World Laparoscopy Hospital, Gurgaon, NCR, New Delhi, , 2014',
        fees: 1100,
        address: {
            line1: '5, Vardhaman Royal Plaza',
            line2: 'LSC Gujranwala Town 1 Block B'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Deepti Dhillon',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS , Armed Forces Medical College (AFMC), Pune , 2003 DDV, Aesthetic medicine , CPS, University of GRiefswaldt , 2006',
        experience: '22 Years',
        about: 'Dr. DeeptiDhillon is a renowned and an eminent name in the medical & cosmetology industry with a colossal experience of 13 years. Having pursued MBBS from AFMC College in 2003 and Diploma in Aesthetic Medicine Cosmetologist & Dermatologist in 2007 she believes that in today?s fast paced world no one has enough time to take care of their skin, face, hairs and even health. She rests in providing the patients with highest quality health care, and is dedicated to the newest advancements and keep up to date with the latest technologies with a consultation fee of Rs700. From 2007 till date she is associated with APPLESKIN in Arjun Nagar, New Delhi with a team of top class professionals, so if you are in Delhi/NCR then you can book an appointment online',
        fees: 1500,
        address: {
            line1: 'L- 1, Green Park Extension',
            line2: 'Opposite Gargi Sarvodaya School'
        }
    },
]