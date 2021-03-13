using System;

namespace API.Extentions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime dt)
        {
            var today = DateTime.Today;
            var ageYear = today.Year - dt.Year;
            return ageYear;
        }
    }
}