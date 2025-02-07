export default function About(props){
    return(
        <>
        <div style={props.mode}  className="py-20 h-[100vh] w-[100vw]">
            <div className="flex flex-col justify-center items-center w-6xl gap-5  rounded-2xl  shadow-lg shadow-gray-600/55  p-6  mx-auto">
                <div className="text-3xl font-bold">About TextUtils</div>
                <div className="text-center">TextUtils is a simple yet powerful text utility tool designed to enhance your text-processing experience. Whether you need to analyze text, convert case formats, or estimate reading time, TextUtils provides an easy and efficient way to handle your text operations.</div>
                <div className="text-2xl font-bold">Features:</div>
                <div>
                <div>✔ Word & Character Count: Instantly calculates the number of words and characters in your text.</div>
                <div>✔ Reading Time Estimation: Estimates the time required to read the given text based on average reading speed</div>
                <div>✔ Real-time Updates: Get instant results as you type or modify text.</div>
                <div>✔ Case Conversions:</div>
                <ul className=" list-disc ml-15">
                    <li>Convert text to UPPERCASE</li>
                    <li>Convert text to lowercase</li>
                    <li>Capitalize each word for better readability</li>
                </ul>
                </div>
            </div>
        </div>
        </>
    )
}